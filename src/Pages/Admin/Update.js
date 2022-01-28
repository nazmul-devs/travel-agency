import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Rating from "react-rating";
import { useParams } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";

const Update = () => {
	const { blogs } = UseAuth();
	const { index } = useParams();
	const {
		_id,
		title,
		img,
		author,
		locaiton,
		category,
		date,
		description,
		cost,
		rating,
		img2,
		title2,
		description2,
	} = blogs[index];
	const { register, handleSubmit, reset } = useForm();
	const url = `https://fathomless-ridge-27071.herokuapp.com/blogs/${_id}`;
	const onSubmit = (data) => {
		fetch(url, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.matchedCount > 0) {
					alert("User updated successfull");
				}
			});
	};
	return (
		<div style={{ background: "#CEE5D0" }}>
			<Container>
				<div className="d-flex justify-content-center align-items-center add-form">
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="d-flex flex-column input-form"
					>
						<input
							defaultValue={title}
							{...register("title")}
							className="my-3 py-2 ps-3 rounded "
						/>
						<input
							defaultValue={img}
							{...register("img")}
							className="mb-3 py-2 ps-3 rounded"
						/>
						<input
							defaultValue={locaiton}
							{...register("locaiton")}
							className="mb-3 py-2 ps-3 rounded"
						/>
						<input
							defaultValue={category}
							{...register("category")}
							className="mb-3 py-2 ps-3 rounded"
						/>
						<input
							defaultValue={date}
							type={"date"}
							{...register("date")}
							className="mb-3 py-2 ps-3 rounded"
						/>
						<textarea
							defaultValue={description}
							{...register("description")}
							className="mb-3 py-2 ps-3 rounded"
							rows="3"
						></textarea>
						<input
							defaultValue={title2}
							{...register("title2")}
							className="mb-3 py-2 ps-3 rounded"
						/>
						<textarea
							defaultValue={description2}
							{...register("description2")}
							className="mb-3 py-2 ps-3 rounded"
							rows="3"
						></textarea>
						<input
							defaultValue={img2}
							{...register("img2")}
							className="mb-3 py-2 ps-3 rounded"
						/>
						<input
							type={"number"}
							defaultValue={cost}
							{...register("cost")}
							className="mb-3 py-2 ps-3 rounded"
						/>
						<Rating
							className="star-rating"
							emptySymbol="fa fa-star-o fa-2x"
							fullSymbol="fa fa-star fa-2x"
							initialRating={rating}
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

export default Update;
