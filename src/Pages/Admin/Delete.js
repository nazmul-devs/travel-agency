import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";

const Delete = () => {
	const { blogs } = UseAuth();

	// Delete handle
	const removeHandle = (id) => {
		const url = `https://fathomless-ridge-27071.herokuapp.com/blogs`;
		fetch(url, {
			method: "DELETE",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({ id }),
		})
			.then((res) => res.json())
			.then((data) => {});
	};
	return (
		<div>
			<Container>
				<Row xs={1} sm={2} md={3} className="g-4">
					{blogs.map((blog, index) => (
						<Col>
							<Card className="card">
								<Card.Img
									variant="top"
									className="rounded-0"
									height={250}
									src={blog.img}
								/>
								<Card.Body className="p-3">
									<h5>{blog.title}</h5>
									<div className="d-flex justify-content-between">
										<Link to={`/edit/${index}`} className="Link">
											<button
												onClick={() => {
													removeHandle(blog._id);
												}}
												className="btn btn-success px-3"
											>
												Edit
											</button>
										</Link>
										<button
											onClick={() => {
												removeHandle(blog._id);
											}}
											className="btn btn-danger px-3 py-1"
										>
											Delete
										</button>
									</div>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
};

export default Delete;
