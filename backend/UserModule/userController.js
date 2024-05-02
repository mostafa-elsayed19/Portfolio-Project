const userModel = require("./userModel");

const createUser = async (req, res, next) => {
	let user = req.body;
	try {
		let newUser = await userModel.create(user);
		res.status(201).json({ message: "User Created", data: newUser });
	} catch (error) {
		res.status(500).json({
			message: "Internal Server Error",
			error: error.message,
		});
	}
};

const updateUser = async (req, res, next) => {
	let user = req.body;
	let { id } = req.params;

	try {
		let updatedUser = await userModel.findByIdAndUpdate(
			id,
			{ $set: user },
			{ new: true }
		);
		if (updatedUser === null) {
			res.status(404).json({ message: "User Not Found" });
		} else {
			res.status(201).json({
				message: "User Updated",
				data: updatedUser,
			});
		}
	} catch (error) {
		res.status(500).json({
			message: "Internal Server Error",
			error: error.message,
		});
	}
};

const deleteUser = async (req, res, next) => {
	let { id } = req.params;
	try {
		let deletedUser = await userModel.findByIdAndDelete(id);
		if (deletedUser === null) {
			res.status(404).json({ message: "User Not Found" });
		} else {
			res.status(201).json({
				message: "User Deleted",
				data: deletedUser,
			});
		}
	} catch (error) {
		res.status(500).json({
			message: "Internal Server Error",
			error: error.message,
		});
	}
};

const getUserById = async (req, res, next) => {
	let { id } = req.params;
	try {
		let user = await userModel.findById(id);
		if (user === null) {
			res.status(404).json({ message: "User Not Found" });
		} else {
			res.status(201).json({ message: "User Found", data: user });
		}
	} catch (error) {
		res.status(500).json({
			message: "Internal Server Error",
			error: error.message,
		});
	}
};

module.exports = {
	createUser,
	updateUser,
	deleteUser,
	getUserById,
};
