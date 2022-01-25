import React from "react";
import "./Home.css";
import Banner from "../Banner/Banner";
import Sidebar from "../SideBar/Sidebar";
import Blogs from "../Blogs/Blogs/Blogs";

const Home = () => {
	return (
		<div>
			<Banner />
			<main className="d-sm-flex">
				<div className="aside">
					<Sidebar />
				</div>
				<section className="blogs">
					<Blogs />
				</section>
			</main>
		</div>
	);
};

export default Home;
