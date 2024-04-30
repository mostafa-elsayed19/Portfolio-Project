import { useContext } from "react";
import { infoContext } from "../../context/context";

const Header = () => {
	const info = useContext(infoContext);
	const { title } = info.info;
	return (
		<header className="text-primary">
			<nav className="grid md:grid-cols-2">
				<h1 className="text-2xl font-bold">{title}</h1>
				<section className="flex justify-center md:justify-end items-center">
					<ul className="hidden md:flex flex-col md:flex-row gap-x-5">
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">Projects</a>
						</li>
						<li>
							<a href="#">About me</a>
						</li>
						<li className="">
							<a href="#">Contact</a>
						</li>
					</ul>
				</section>
			</nav>
		</header>
	);
};

export default Header;
