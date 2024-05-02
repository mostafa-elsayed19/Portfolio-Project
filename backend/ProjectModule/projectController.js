const ProjectModel = require("./projectModel");
const UserModel = require("../UserModule/userModel");

const createProject = async (req, res, next) => {
	let project = req.body;

	try {
		let newProject = await ProjectModel.create(project);

		let userId = req.params.userId;

		await UserModel.findByIdAndUpdate(
			userId,
			{
				$push: { projects: newProject._id },
			},
			{ new: true }
		);
		res.status(201).json({ message: "Project Created", data: newProject });
	} catch (error) {
		res.status(500).json({
			message: "Internal Server Error",
			error: error.message,
		});
	}
};

const updateProject = async (req, res) => {
	let project = req.body;
	let { projectId } = req.params;

	try {
		let updatedProject = await ProjectModel.findByIdAndUpdate(
			projectId,
			project,
			{
				new: true,
			}
		);
		res.status(200).json({
			message: "Project Updated",
			data: updatedProject,
		});
	} catch {
		res.status(500).json({
			message: "Internal Server Error",
			error: error.message,
		});
	}
};

const deleteProject = async (req, res) => {
	let { projectId } = req.params;
	try {
		let deletedProject = await ProjectModel.findByIdAndDelete(projectId);

		const users = await UserModel.find({ projects: projectId });
		for (let user of users) {
			const updatedProjects = user.projects.filter(
				(id) => id.toString() !== projectId
			);
			await UserModel.findByIdAndUpdate(user._id, {
				$set: { projects: updatedProjects },
			});
		}
		res.status(200).json({
			message: "Project Deleted",
			data: deletedProject,
		});
	} catch (error) {
		res.status(500).json({
			message: "Internal Server Error",
			error: error.message,
		});
	}
};

const getProjectByUserId = async (req, res) => {
	let userId = req.params.userId;
	try {
		const user = await UserModel.findById(userId);
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}
		const projects = await ProjectModel.find({
			_id: { $in: user.projects },
		});
		res.status(200).json({
			message: "Projects Fetched",
			data: projects,
		});
	} catch (error) {
		res.status(500).json({
			message: "Internal Server Error",
			error: error.message,
		});
	}
};

module.exports = {
	createProject,
	updateProject,
	deleteProject,
	getProjectByUserId,
};
