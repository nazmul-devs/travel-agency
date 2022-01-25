import React from "react";
import logo from "../../Images/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
	return (
		<div>
			<Navbar style={{ background: "none", height: "10vh" }} expand="lg">
				<Container>
					<Navbar.Brand as={Link} to="/">
						<img src={logo} width={70} alt="" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto links">
							<Link to={"/login"} className="link">
								Family travel
							</Link>
							<Link to={"/login"} className="link">
								Blogs
							</Link>
							<Link to={"/login"} className="link">
								Add Your Experience
							</Link>
							<Link to={"/login"} className="link">
								get in touch{" "}
							</Link>
						</Nav>
						<Nav className="login">
							<img
								src="https://visme.co/blog/wp-content/themes/blog/img/search_icon_left.svg"
								alt=""
							/>

							<Link to={"/login"} className="link">
								<button className="btn login-btn">Login</button>
							</Link>
							<Link to={"/register"} className="link">
								<button className="btn signup-btn">Sign Up Free</button>
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;
