import React from "react";
import "./BlogDetails.css";
import Fade from "react-reveal/Fade";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";
const BlogDetails = () => {
	const { index } = useParams();
	const { blogs } = UseAuth();
	const blog = blogs[index];
	document.title = blog.title;
	return (
		<div>
			<Container>
				<Fade bottom>
					<div className="news-card text-center mt-5">
						<p className="news-title p-3">
							Latest Travel News and Views from Asia
						</p>
						<p className="news-country ms-2">{blog.lotion}</p>
					</div>
				</Fade>
				<Fade right>
					<div className="blog-title text-center">
						<h2 className="my-2">{blog.title}</h2>
						<p>By -{blog.author}</p>
					</div>
				</Fade>
				<Fade bottom>
					<img src={blog.img} className="w-100" alt="" />
				</Fade>
				<div className="description my-4">
					<Fade right>
						<p className="my-5">{blog.description}</p>
					</Fade>
					{blog.description2 && (
						<div className="second-blog">
							<Fade left>
								<img
									className="img-fluid w-100"
									src={blog.img2}
									alt=""
								/>
							</Fade>
							<Fade left>
								<h3 className="my-4">{blog.title2}</h3>
								<p>{blog.description2}</p>
							</Fade>
						</div>
					)}
				</div>
				<Fade right>
					<div className="details-social">
						<hr />
						<div className="social-links">
							<a href="https://www.facebook.com/" className="link">
								<i className="fab fa-facebook-f"></i>
							</a>
							<a href="https://www.facebook.com/" className="link">
								<i className="fab fa-twitter"></i>
							</a>
							<a href="https://www.facebook.com/" className="link">
								<i className="fab fa-pinterest"></i>
							</a>
							<a href="https://www.facebook.com/" className="link">
								<i className="fas fa-share"></i>
							</a>
						</div>
						<hr />
					</div>
				</Fade>
			</Container>
		</div>
	);
};

export default BlogDetails;
