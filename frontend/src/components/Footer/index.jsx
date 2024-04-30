import { useContext } from "react";
import { infoContext } from "../../context/context";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
	const info = useContext(infoContext);
	const { number, location, email } = info.info;
	return (
		<footer className="text-white flex flex-col gap-y-20">
			<div className="grid lg:grid-cols-2 py-5 gap-y-20">
				<section className="col-span-1 flex flex-col gap-5 place-self-start lg:place-self-center">
					<h1 className="font-bold text-2xl md:text-3xl  uppercase ">
						Get in touch
					</h1>
					<div className="flex flex-col gap-4 ">
						<span
							role="button"
							className="flex gap-x-2 items-center transition ease-in-out duration-300 rounded-full w-fit py-2 px-5 border border-white bg-white text-primary hover:bg-transparent hover:text-white"
						>
							<FaLocationDot className="text-xl" /> {location}
						</span>
						<span
							role="button"
							className="flex gap-x-2 items-center transition ease-in-out duration-300 rounded-full w-fit py-2 px-5 border border-white bg-white text-primary hover:bg-transparent hover:text-white"
						>
							<IoLogoWhatsapp className="text-xl" /> +20 {number}
						</span>
						<span
							role="button"
							className="flex gap-x-2 items-center transition ease-in-out duration-300 rounded-full w-fit py-2 px-5 border border-white bg-white text-primary hover:bg-transparent hover:text-white"
						>
							<MdEmail className="text-xl" /> {email}
						</span>
					</div>
				</section>
				<section className="place-self-end lg:place-self-center">
					<form className="flex flex-col gap-y-2 justify-end">
						<h1 className="font-bold lg:text-start text-2xl md:text-3xl  uppercase ">
							Email me
						</h1>
						<div className="flex items-center gap-2 w-3/4">
							<input
								type="text"
								placeholder="Full Name"
								className=" transition ease-in-out duration-300 rounded-md py-2 px-4 border border-primary focus:outline-none focus:bg-transparent text-primary focus:text-white focus:border-white 
                     placeholder:text-primary focus:placeholder:text-white
                     "
							/>
							<input
								type="email"
								placeholder="Email"
								className=" transition ease-in-out duration-300 rounded-md py-2 px-4 border border-primary focus:outline-none focus:bg-transparent text-primary focus:text-white focus:border-white 
                     placeholder:text-primary focus:placeholder:text-white
                     "
							/>
						</div>
						<div className="flex flex-col gap-y-2">
							<textarea
								placeholder="Message"
								className="w-full transition ease-in-out duration-300 rounded-md py-2 px-4 border border-primary focus:outline-none focus:bg-transparent text-primary focus:text-white focus:border-white 
                     placeholder:text-primary focus:placeholder:text-white"
							></textarea>
							<button
								className="w-full transition ease-in-out duration-300 rounded-md py-2 px-4 border border-white hover:bg-white hover:text-primary
                     "
							>
								Submit
							</button>
						</div>
					</form>
				</section>
			</div>
			<div className="text-center">
				&copy;2024 Mostafa Ali. All rights reserved
			</div>
		</footer>
	);
}
