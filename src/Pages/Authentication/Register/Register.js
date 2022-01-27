import React from "react";
import "../Login/Login.css";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import UseFirebase from "../../../Hooks/UseFirebase";

const Register = () => {
	const { newUserRegister, user } = UseFirebase();
	const { register, handleSubmit, reset } = useForm();
	const location = useLocation();
	const navigate = useNavigate();
	const onSubmit = (data) => {
		newUserRegister(data, location, navigate);
		reset();
	};
	console.log(user);

	return (
		<div className="login-container">
			<div className="login-card">
				<h2 className="text-center my-3">Login here</h2>
				<div className="d-flex justify-content-center ">
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="d-flex flex-column w-75 input-form"
					>
						<input
							type={"text"}
							placeholder="Your name"
							{...register("name")}
							className="my-3 py-2 ps-3 rounded "
						/>
						<input
							type={"email"}
							placeholder="Your email"
							{...register("email")}
							className="mb-3 py-2 ps-3 rounded "
						/>
						<input
							type={"password"}
							placeholder="New password"
							{...register("password")}
							className="mb-3 py-2 ps-3 rounded"
						/>

						<div className="d-flex align-items-center justify-content-between">
							<button
								type="submit"
								className="btn submit-btn rounded px-4 py-2"
							>
								Register
							</button>
						</div>
					</form>
				</div>
				<div className="d-flex justify-content-center">
					<div className="login-grp mt-4 d-flex justify-content-between align-items-center w-75">
						<p className="text-secondary">
							Have an account? <Link to="/login">Login</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
