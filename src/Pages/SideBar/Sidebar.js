import React from "react";
import { Container } from "react-bootstrap";
import "./Sidebar.css";

const newses = [
	{
		id: 1,
		title: "NM+ UPDATE: MEXICO EDITION",
		img: "https://cdn.pixabay.com/photo/2015/05/31/10/55/man-791049__340.jpg",
		des: "On Monday, I’m going to Mexico for six weeks. I’m heading to Playa Del Carmen, Mexico City, and then Chiapas before heading to Guatemala for a couple of weeks. This trip is the last big trip before I come back to Austin and buy a house.",
	},
	{
		id: 2,
		title: "NM+ UPDATE: LA EDITION",
		img: "https://cdn.searchenginejournal.com/wp-content/uploads/2018/08/How-to-Plan-a-Blog-Post-in-6-Easy-Steps-760x400.png",
		des: "Happy New Year everyone! I hope you all had a great holiday season! As many of you know, I tested positive for COVID right before I was supposed to go to Brazil. Brazil requires a negative COVID test to enter and, well, mine came back positive. Since I didn’t have any symptoms, I thought it might have been a false positive but many subsequent tests confirmed that yes, I did indeed have COVID for a second time.",
	},
	{
		id: 3,
		title: "IT'S TIME TO BREAK UP WITH AIRBNB",
		img: "https://neilpatel.com/wp-content/uploads/2017/02/blogging.jpg",
		des: "Fuck Airbnb, I said to myself as I read one of their customer service replies. Despite having documentation that my host hadn't paid the refund they agreed to give me, Airbnb decided to side with the host and wouldn't issue me the refund. This was the second time in several months I had to call customer service — and the second time they sided with the host.",
	},
	{
		id: 4,
		title: "THE BEST BOOKS I READ IN 2021",
		img: "https://www.zerox24.com/wp-content/uploads/2019/11/blogging-for-business-heres-everything-you-need-to-know.jpg",
		des: "This year was a phenomenal reading year (one positive outcome of being stuck at home because of COVID). I managed to read a lot of books on a variety of subjects. Not all of them were winners but most were. As we wrap up the year (and start buying books for the holidays), I want to share some of this year’s favorites.",
	},
];

const Sidebar = () => {
	return (
		<div className="sidebar">
			<Container>
				<h2 className="pt-4 pb-2  mb-5 text-center title">Latest news</h2>
				<div className="letest-news">
					{newses.map((news) => (
						<div className="news bg-light pb-2 mb-3" key={news.id}>
							<img src={news.img} className="img-fluid rounded" alt="" />
							<h5>{news.title}</h5>
							<p className="p-2">{news.des.slice(0, 70)}...</p>
						</div>
					))}
				</div>
			</Container>
		</div>
	);
};

export default Sidebar;
