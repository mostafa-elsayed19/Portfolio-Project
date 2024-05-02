const express = require("express");
const router = express.Router();
const {
	createProject,
	updateProject,
	deleteProject,
	getProjectByUserId,
} = require("./projectController");

router.route("/:userId").post(createProject).get(getProjectByUserId);
router.route("/:projectId").patch(updateProject).delete(deleteProject);

module.exports = router;
