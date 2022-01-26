import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Header/Header";
import Login from "./Pages/Authentication/Login/Login";
import BlogDetails from "./Pages/Blogs/BlogDetails/BlogDetails";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/blogs/:index" element={<BlogDetails />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
