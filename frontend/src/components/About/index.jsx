import { useContext } from "react";
import { infoContext } from "../../context/context";

export default function About() {
	const info = useContext(infoContext);
	const { title, skills, about } = info.info;
	return (
		<>
			<main className="text-center text-primary flex flex-col gap-y-32">
				<div className="flex flex-col gap-y-10">
					<section className="flex gap-x-4 justify-center items-center">
						<img
							src="./images/pic.jpg"
							alt=""
							className="w-20 rounded-full"
						/>
						<h2 className="text-3xl uppercase font-bold">
							{title}
						</h2>
					</section>
					<section className="flex gap-x-4 justify-center items-center">
						{skills.map((skill) => (
							<span
								key={skill.id}
								className="border text-xl capitalize border-primary py-2 px-8 rounded-full"
							>
								{skill.name}
							</span>
						))}
					</section>
				</div>
				<div className="w-3/4 mx-auto text-2xl">
					<p className="text-center leading-relaxed">{about}</p>
					<button className="transition ease-in-out duration-300 font-bold rounded-full text-2xl border border-primary  bg-primary text-white py-4 px-16 my-4 hover:bg-transparent hover:text-primary ">
						Work with me
					</button>
				</div>
			</main>
		</>
	);
}
