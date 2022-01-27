import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

import Fade from "react-reveal/Fade";

const Banner = () => {
	return (
		<Carousel className="carousel">
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
					alt="First slide"
				/>
				<Fade right>
					{" "}
					<Carousel.Caption>
						<h3>TRAVEL TO SRI LANKA</h3>
						<p>
							Sri Lanka is fully open to vaccinated travellers with
							minimal restrictions and paperwork.
						</p>
					</Carousel.Caption>
				</Fade>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/enjoying-the-view-royalty-free-image-1582838254.jpg?crop=1.00xw:0.751xh;0,0.223xh&resize=1200:*"
					alt="First slide"
				/>

				<Fade right>
					<Carousel.Caption>
						<h3>TRAVEL TO VIETNAM</h3>
						<p>
							Vietnam took a cautious approach to the pandemic, reflected
							by the consistently low case and death rates, especially
							during 2020.
						</p>
					</Carousel.Caption>
				</Fade>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://images.hdqwalls.com/wallpapers/travel-hd.jpg"
					alt="Third slide"
				/>

				<Fade right>
					<Carousel.Caption>
						<h3>Banyan Tree, Ubud – Indonesia</h3>
						<p>
							Set to open in April 2022 Buahan is the first hotel to
							launch for the new hospitality group Banyan Tree Escape (an
							extension of the Banyan Tree Group).
						</p>
					</Carousel.Caption>
				</Fade>
			</Carousel.Item>
		</Carousel>
	);
};

export default Banner;
