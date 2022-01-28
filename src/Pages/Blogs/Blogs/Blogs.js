import React from "react";
import { Container, Row } from "react-bootstrap";
import Blog from "../Blog/Blog";
import "./Blogs.css";
import UseAuth from "../../../Hooks/UseAuth";
import { useState } from "react";
import Pagination from "../Pagination/Pagination";

const Blogs = () => {
	const { blogs } = UseAuth();
	const [currentPage, setCurrentPage] = useState(1);
	const [blogPerPage, setBlogPerPage] = useState(10);
	const indexOfLstBlog = currentPage * blogPerPage;
	const indexOfFirstBlog = indexOfLstBlog - blogPerPage;
	const currentBlogs = blogs.slice(
		indexOfFirstBlog,
		Math.ceil(indexOfLstBlog)
	);
	return (
		<div className="blogs-container">
			<h2 className="text-center pb-3 ">LATEST BLOG POSTS</h2>

			<Container>
				<Row xs={1} md={2} className="g-4">
					{currentBlogs.map((blog, index) => (
						<Blog blog={blog} index={index} key={blog._id}></Blog>
					))}
				</Row>
				<Pagination
					setCurrentPage={setCurrentPage}
					currentPage={currentPage}
				/>
			</Container>
		</div>
	);
};

export default Blogs;
