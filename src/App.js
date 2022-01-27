import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Header/Header";
import Login from "./Pages/Authentication/Login/Login";
import BlogDetails from "./Pages/Blogs/BlogDetails/BlogDetails";
import Footer from "./Pages/Footer/Footer";
import Register from "./Pages/Authentication/Register/Register";
import AddExperience from "./Pages/AddExperience/AddExperience";
import AuthProvider from "./Hooks/AuthProvider";
import PrivateRoute from "./Pages/PrivatRoute/PrivateRoute";
import Delete from "./Pages/Admin/Delete";

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route element={<PrivateRoute />}>
						<Route path="/addex" element={<AddExperience />} />
					</Route>
					<Route element={<PrivateRoute />}>
						<Route path="/delete" element={<Delete />} />
					</Route>
					<Route path="/blogs/:index" element={<BlogDetails />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
