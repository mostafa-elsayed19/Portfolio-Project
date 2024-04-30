import "./App.css";
import { InfoProvider } from "./context/context";
import { useState } from "react";
import Layout from "./pages/Layout";

function App() {
	const [info, setInfo] = useState({
		title: "Mostafa Ali",
		job: "Web Developer",
		brief: "Driven web developer",
		brief_description: "Crafting experiences that inspire",
		img: "./images/pic.jpg",
		skills: [
			{ id: "1", name: "react" },
			{ id: "2", name: "AngularJS" },
			{ id: "3", name: "NodeJS" },
			{ id: "4", name: "HTML" },
		],
		about: "Hey there, I'm Mostafa Ali, a web developer with a passion for creating engaging online experiences that captivate users and achieve business objectives. With one year of hands-on experience in the field, I've refined my skills in crafting sleek interfaces that prioritize usability and efficiency.Within this portfolio, you'll find a collection of my recent web development projects, showcasing my ability to tackle diverse challenges with innovative solutions. Whether it's building e-commerce platforms, mobile-friendly websites, or dynamic web applications, my work reflects a commitment to delivering seamless online experiences across various industries and user scenarios.",
		number: "100 069 6300",
		email: "mostafaelsayed19@outlook.com",
		location: "Qena, Egypt",
	});
	return (
		<InfoProvider value={{ info, setInfo }}>
			<Layout></Layout>
		</InfoProvider>
	);
}

export default App;
