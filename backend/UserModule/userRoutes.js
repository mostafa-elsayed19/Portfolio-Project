const express = require("express");
const router = express.Router();
const {
	createUser,
	updateUser,
	deleteUser,
	getUserById,
} = require("./userController");

router.route("/").post(createUser);
router.route("/:id").patch(updateUser).delete(deleteUser).get(getUserById);

module.exports = router;
