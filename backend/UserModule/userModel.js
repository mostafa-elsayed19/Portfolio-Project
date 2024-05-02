const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
	{
		logo: {
			type: String,
		},
		image: {
			type: String,
		},
		image_32: {
			type: String,
		},
		title: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		phone: {
			type: String,
			required: true,
			unique: true,
		},
		address: {
			type: String,
			required: true,
		},
		overview: {
			type: String,
			required: true,
		},
		about: {
			type: String,
			required: true,
		},
		skills: [
			{
				type: String,
				required: true,
			},
		],
		social_links: {
			type: Object,
		},
		projects: [
			{
				type: mongoose.Schema.ObjectId,
				ref: "projects",
			},
		],
	},
	{ collection: "users" }
);

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
