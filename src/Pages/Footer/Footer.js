import React from "react";
import "./Footer.css";
import logo from "../../Images/logo.png";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-details">
				<div className="social">
					<ul>
						<li>
							<i className="fab fa-facebook-f"></i> <span>Facebook</span>{" "}
						</li>
						<li>
							<i className="fab fa-twitter"></i>
							<span>Twitter</span>
						</li>
						<li>
							<i className="fab fa-instagram"></i>
							<span>Instagram</span>
						</li>
					</ul>
				</div>
				<div className="logo d-flex justify-content-center">
					<div className="text-center mt-5">
						<h2>Experience</h2>
						<h4>TRAVEL GROUP</h4>
						<img src={logo} alt="" />
					</div>
				</div>
				<p className="text-center copyright-text">
					@2022 Experience Travel Group
				</p>
				<p className="text-center back-top">
					<a href="#" className="text-center text-white">
						Back To Top
					</a>
				</p>
			</div>
		</div>
	);
};

export default Footer;
