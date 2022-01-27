import React from "react";

import { useState } from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Rating from "react-rating";
import Swal from "sweetalert2";
import UseAuth from "../../Hooks/UseAuth";
import "./AddExperience.css";

const AddExperience = () => {
	const { user } = UseAuth();
	const [rating, setRating] = useState(0);
	const { register, handleSubmit, reset } = useForm();
	const axios = require("axios");
	const onSubmit = (data) => {
		data.author = user.displayName;
		data.rating = rating;
		axios
			.post("http://localhost:5000/blog", data)
			.then(function (response) {
				Swal.fire({
					position: "top-end",
					icon: "success",
					title: "Your experience been saved",
					showConfirmButton: false,
					timer: 1500,
				});
				reset();
			})
			.catch(function (error) {
				console.log(error);
			});
	};
	return (
		<div className="add-experience">
			<Container>
				<h2 className="text-center title-ex">Add your experience</h2>
				<div className="d-flex justify-content-center align-items-center add-form">
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="d-flex flex-column input-form"
					>
						<input
							placeholder="Title"
							{...register("title")}
							className="my-3 py-2 ps-3 rounded "
						/>
						<input
							placeholder="Img url"
							{...register("img")}
							className="mb-3 py-2 ps-3 rounded"
						/>
						<input
							placeholder="Location"
							{...register("locaiton")}
							className="mb-3 py-2 ps-3 rounded"
						/>
						<input
							defaultValue={"Adventure"}
							{...register("category")}
							className="mb-3 py-2 ps-3 rounded"
						/>
						<input
							type={"date"}
							{...register("date")}
							className="mb-3 py-2 ps-3 rounded"
						/>
						<textarea
							placeholder="Your details experience"
							{...register("description")}
							className="mb-3 py-2 ps-3 rounded"
							rows="3"
						></textarea>
						<input
							placeholder="Second title"
							{...register("title2")}
							className="mb-3 py-2 ps-3 rounded"
						/>
						<textarea
							placeholder="More about this blog"
							{...register("description2")}
							className="mb-3 py-2 ps-3 rounded"
							rows="3"
						></textarea>
						<input
							placeholder="Another img url"
							{...register("img2")}
							className="mb-3 py-2 ps-3 rounded"
						/>
						<input
							type={"number"}
							placeholder="Total cost $"
							{...register("cost")}
							className="mb-3 py-2 ps-3 rounded"
						/>
						<Rating
							onChange={(rate) => setRating(rate)}
							className="star-rating"
							emptySymbol="fa fa-star-o fa-2x"
							fullSymbol="fa fa-star fa-2x"
						/>

						<div className="d-flex align-items-center justify-content-between">
							<button
								type="submit"
								className="btn submit-btn rounded px-4 py-2 mb-5"
							>
								Add experience
							</button>
						</div>
					</form>
				</div>
			</Container>
		</div>
	);
};

export default AddExperience;
