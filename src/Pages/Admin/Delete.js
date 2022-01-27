import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import UseAuth from "../../Hooks/UseAuth";

const Delete = () => {
	const { blogs } = UseAuth();

	// Delete handle
	const removeHandle = (id) => {
		const url = `http://localhost:5000/blogs`;
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
					{blogs.map((blog) => (
						<Col>
							<Card className="card border-0 rounded-0 pb-4">
								<Card.Img
									variant="top"
									className="rounded-0"
									src={blog.img}
								/>
								<Card.Body>
									<h3>{blog.title}</h3>
								</Card.Body>
								<button
									onClick={() => {
										removeHandle(blog._id);
									}}
									className="btn btn-danger"
								>
									Delete
								</button>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
};

export default Delete;
