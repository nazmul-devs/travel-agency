import React from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
	const { index } = useParams();
	return (
		<div>
			<h2 className="text-cet">Blog details {index}</h2>
		</div>
	);
};

export default BlogDetails;
