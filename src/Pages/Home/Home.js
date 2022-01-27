import React from "react";
import "./Home.css";
import Banner from "../Banner/Banner";
import Sidebar from "../SideBar/Sidebar";
import Blogs from "../Blogs/Blogs/Blogs";
import Fade from "react-reveal/Fade";

const Home = () => {
	return (
		<div>
			<Banner />
			<main className="d-sm-flex">
				<div className="aside">
					<Fade bottom>
						<Sidebar />
					</Fade>
				</div>
				<section className="blogs">
					<Fade right>
						<Blogs />
					</Fade>
				</section>
			</main>
		</div>
	);
};

export default Home;
