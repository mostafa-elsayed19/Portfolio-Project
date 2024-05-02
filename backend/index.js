const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

mongoose.connect(
	"mongodb+srv://mostafaqaraman:12345678Sa@portfolio.mvo5um5.mongodb.net/Portfolio?retryWrites=true&w=majority&appName=Portfolio"
);

const whiteList = ["http://localhost:5173"];
app.use(
	cors({
		origin: whiteList,
	})
);

app.listen(port, () => {
	console.log(`listening on ${port}`);
});

const userRoutes = require("./UserModule/userRoutes");
const projectRoutes = require("./ProjectModule/projectRoutes");
app.use(express.json());
app.use("/user", userRoutes);
app.use("/project", projectRoutes);
app.use("*", (req, res) => {
	res.status(404).json({ message: "API not found" });
});
