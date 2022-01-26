import React from "react";
import "./BlogDetails.css";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { demoBlogs } from "../Blogs/DemoBlogs";
const BlogDetails = () => {
	const { index } = useParams();
	const blogs = demoBlogs;
	const blog = blogs[index];
	return (
		<div>
			<Container>
				<div className="news-card text-center mt-5">
					<p className="news-title p-3">
						Latest Travel News and Views from Asia
					</p>
					<p className="news-country ms-2">{blog.lotion}</p>
				</div>
				<div className="blog-title text-center">
					<h2 className="my-2">{blog.title}</h2>
					<p>By -{blog.author}</p>
				</div>
				<img src={blog.img} className="w-100" alt="" />
				<div className="description my-4">
					<p className="my-5">{blog.description}</p>
					<div className="second-blog">
						<img className="img-fluid w-100" src={blog.img2} alt="" />
						<h3 className="my-4">{blog.title2}</h3>
						<p>{blog.description2}</p>
					</div>
				</div>
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
			</Container>
		</div>
	);
};

export default BlogDetails;
