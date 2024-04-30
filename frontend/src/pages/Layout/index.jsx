import Header from "../../components/Header";
import Projects from "../../components/ProjectCards";
import Overview from "../../components/Overview";
import About from "../../components/About";
import Footer from "../../components/Footer";

function Layout() {
	return (
		<>
			<div className="flex flex-col">
				<header className="py-3 shadow-lg shadow-white/50 z-0 ">
					<div className="container mx-auto">
						<Header></Header>
					</div>
				</header>
				<div className="flex-grow-1">
					<div className="bg-primary py-10">
						<div className="container mx-auto">
							<Overview></Overview>
						</div>
					</div>
					<div className="bg-primary py-10">
						<div className="container mx-auto px-2 lg:px-0">
							<Projects></Projects>
						</div>
					</div>
					<div className="py-32">
						<div className="container mx-auto">
							<About></About>
						</div>
					</div>
				</div>
				<footer className="bg-primary py-10">
					<div className="container mx-auto">
						<Footer></Footer>
					</div>
				</footer>
			</div>
		</>
	);
}

export default Layout;
