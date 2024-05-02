const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		link: {
			type: Object,
			required: true,
		},
		preview: {
			type: String,
			required: true,
		},
		tools: [
			{
				type: String,
				required: true,
			},
		],
	},
	{ collection: "projects" }
);

const ProjectModel = mongoose.model("projects", ProjectSchema);

module.exports = ProjectModel;
