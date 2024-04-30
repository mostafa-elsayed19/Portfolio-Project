import { useState } from "react";

export default function Projects() {
	const data = [
		{
			id: "1",
			title: "Project 1",
			description: "Project 1 description",
			image: "https://picsum.photos/400/400",
		},
		{
			id: "2",
			title: "Project 2",
			description: "Project 2 description",
			image: "https://picsum.photos/400/400",
		},
		{
			id: "3",
			title: "Project 3",
			description: "Project 3 description",
			image: "https://picsum.photos/400/400",
		},
		{
			id: "4",
			title: "Project 4",
			description: "Project 4 description",
			image: "https://picsum.photos/500",
		},
		{
			id: "5",
			title: "Project 5",
			description: "Project 5 description",
			image: "https://picsum.photos/500",
		},
		{
			id: "6",
			title: "Project 6",
			description: "Project 6 description",
			image: "https://picsum.photos/500",
		},
	];
	const [hovered, setHovered] = useState(Array(data.length).fill(false));
	return (
		<>
			<main className="text-white">
				<h1 className="font-bold text-2xl my-10">My Projects</h1>
				<div className="grid grod-rows-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-10">
					{data.map((project, index) => (
						<section
							key={project.id}
							className="relative flex items-end m:w-1/2 bg-no-repeat bg-origin-border bg-cover"
							style={{
								backgroundImage: `url(${project.image})`,
								height: "300px",
							}}
							onMouseEnter={() => {
								const newHovered = [...hovered];
								newHovered[index] = true;

								setHovered(newHovered);
							}}
							onMouseLeave={() => {
								const newHovered = [...hovered];
								newHovered[index] = false;

								setHovered(newHovered);
							}}
						>
							<span
								className={`absolute top-0 left-0 w-full h-full z-0 transition ease-in-out duration-700 ${
									hovered[index]
										? "bg-gray-900 bg-opacity-50"
										: ""
								}`}
							></span>
							<div
								className={`p-4 z-10 transition ease-in-out duration-700 ${
									hovered[index] ? "opacity-100" : "opacity-0"
								}`}
							>
								<h1 className="text-2xl capitalize my-2">
									{project.description}
								</h1>
								<button className="rounded-full border py-2 px-12">
									View Project
								</button>
							</div>
						</section>
					))}
				</div>
			</main>
		</>
	);
}
