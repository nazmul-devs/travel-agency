import React from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";

const Login = () => {
	const { gooleLogin, error, user } = UseAuth();
	const location = useLocation();

	const navigate = useNavigate();
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		console.log(data);
		reset();
	};

	console.log(user);
	return (
		<div className="login-container">
			<div className="login-card">
				<h2 className="text-center my-3">Login here</h2>
				{error && <h4 className="text-center text-danger my-2">{error}</h4>}
				<div className="d-flex justify-content-center ">
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="d-flex flex-column w-75 input-form"
					>
						<input
							type={"email"}
							placeholder="Your email"
							{...register("emial")}
							className="my-3 py-2 ps-3 rounded "
						/>
						<input
							type={"password"}
							placeholder="Your password"
							{...register("password")}
							className="mb-3 py-2 ps-3 rounded"
						/>

						<div className="d-flex align-items-center justify-content-between">
							<button
								type="submit"
								className="btn submit-btn rounded px-4 py-1"
							>
								Logn
							</button>
							<button className="btn text-secondary">
								Forget Password ?
							</button>
						</div>
					</form>
				</div>
				<div className="d-flex justify-content-center">
					<div className="login-grp mt-4 d-flex justify-content-between align-items-center w-75">
						<div className="login-items">
							<button
								onClick={() => gooleLogin(location, navigate)}
								className="btn rounded-circle text-white m-1"
								style={{ background: "#cc3333" }}
							>
								<i className="fab fa-google"></i>
							</button>
							<button
								className="btn rounded-circle text-white m-1"
								style={{ background: "#3b5998" }}
							>
								<i className="fab fa-facebook-f"></i>
							</button>
							<button
								className="btn rounded-circle text-white m-1"
								style={{ background: "#00acee" }}
							>
								<i className="fab fa-twitter"></i>
							</button>
						</div>
						<p className="text-secondary">
							Don't have an account? <Link to="/register">Register</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
