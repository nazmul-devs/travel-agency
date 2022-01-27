import React from "react";
import { Container, Row } from "react-bootstrap";
import Blog from "../Blog/Blog";
import "./Blogs.css";
import UseAuth from "../../../Hooks/UseAuth";

const Blogs = () => {
	const { blogs } = UseAuth();
	return (
		<div className="blogs-container">
			<h2 className="text-center pb-3 ">LATEST BLOG POSTS</h2>

			<Container>
				<Row xs={1} md={2} className="g-4">
					{blogs.map((blog, index) => (
						<Blog blog={blog} index={index} key={blog._id}></Blog>
					))}
				</Row>
			</Container>
		</div>
	);
};

export default Blogs;
