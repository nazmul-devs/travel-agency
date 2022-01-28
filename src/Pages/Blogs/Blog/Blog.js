import React from "react";
import "./Blog.css";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import Slide from "react-reveal/Slide";

const Blog = (props) => {
	const { author, category, date, description, img, lotion, title, rating } =
		props.blog;
	const index = props.index;
	return (
		<Col>
			<Card className="card border-0 rounded-0 pb-4">
				<Slide bottom>
					<Card.Img variant="top" className="rounded-0" src={img} />
				</Slide>
				<div className="news-card">
					<p className="news-title p-3">
						Latest Travel News and Views from Asia
					</p>
					<p className="news-country">{lotion}</p>
				</div>
				<Card.Body className="card-body">
					<Slide bottom>
						<div className="d-flex justify-content-between align-items-center">
							<p className="category px-3 rounded-pill py-1">
								{category}
							</p>
							<Rating
								className="star"
								emptySymbol="fa fa-star-o"
								fullSymbol="fa fa-star"
								initialRating={rating}
								readonly
							/>
						</div>

						<Card.Title className="text-center title">{title}</Card.Title>
						<p className="author">
							By {author} - {date}
						</p>
						<Card.Text className="description">
							{description.slice(0, 200)}
						</Card.Text>
						<Link to={`blogs/${index}`} className="Link">
							Read more ...
						</Link>
					</Slide>
				</Card.Body>
				<div className="social">
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
				</div>
			</Card>
		</Col>
	);
};

export default Blog;
