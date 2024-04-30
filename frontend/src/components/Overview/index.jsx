import { useContext } from "react";
import { infoContext } from "../../context/context";

export default function Overview() {
	const info = useContext(infoContext);
	const { title, job, brief, brief_description, img } = info.info;
	return (
		<main className="text-white">
			<div className="grid lg:grid-cols-2">
				<section className="bg-[url('images/stars.svg')] bg-contain bg-no-repeat bg-center py-20">
					<div className="flex flex-col h-full justify-between gap-y-40 lg:gap-y-0">
						<section className="flex flex-col md:w-1/2">
							<h1 className="font-bold text-2xl md:text-4xl xl:text-5xl md:text-center uppercase underline">
								{title}
							</h1>
							<p className="md:text-end text-xl md:text-2xl w-3/4 md:self-end">
								{job}
							</p>
						</section>
						<section className="m-0 md:ml-10 flex flex-col items-start md:1/2">
							<p className="text-xl">{brief}</p>
							<p className="text-xl">{brief_description}</p>
							<button className="transition ease-in-out duration-300 font-bold rounded-full text-2xl border border-white  bg-white text-primary py-4 px-16 my-4 hover:bg-transparent hover:text-white ">
								Work with me
							</button>
						</section>
					</div>
				</section>
				<section className="hidden lg:flex justify-center bg-[url('images/stars.svg')] bg-contain bg-no-repeat bg-left-bottom">
					<img
						src={img}
						className="w-auto rounded-full lg:rounded-3xl"
					/>
				</section>
			</div>
		</main>
	);
}
