import React from "react";
import "./Blog.css";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Blog = (props) => {
	const {
		author,
		category,
		date,
		description,
		description2,
		img,
		lotion,
		title,
	} = props.blog;
	return (
		<Col>
			<Card className="card border-0 rounded-0">
				<Card.Img variant="top" className="rounded-0" src={img} />
				<div className="news-card">
					<p className="news-title p-3">
						Latest Travel News and Views from Asia
					</p>
					<p className="news-country">{lotion}</p>
				</div>
				<Card.Body className="card-body">
					<p className="category px-3 rounded-pill py-1">{category}</p>
					<Card.Title className="text-center title">{title}</Card.Title>
					<p className="author">
						By {author} - {date}
					</p>
					<Card.Text className="description">
						{description.slice(0, 200)}
					</Card.Text>
					<Link to={"/"}>Read more</Link>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default Blog;
