import React from "react";
import UseAuth from "../../../Hooks/UseAuth";

const Pagination = ({ setCurrentPage, currentPage }) => {
	const { blogs } = UseAuth();
	const btnNumber = Math.ceil(blogs.length / 10);
	const pageNumber = [];
	for (let i = 1; i <= btnNumber; i++) {
		pageNumber.push(i);
	}

	return (
		<div>
			<div className="pagination-btns">
				<nav aria-label="Page navigation example" className="mt-4">
					<ul className="pagination justify-content-center">
						<li className="page-item">
							<button
								onClick={() => setCurrentPage(currentPage - 1)}
								className="btn page-link mx-1"
							>
								Previous
							</button>
						</li>

						{pageNumber.map((page) => (
							<li className="page-item" key={page}>
								<button
									onClick={() => setCurrentPage(page)}
									className="btn page-link mx-1"
								>
									{page}
								</button>
							</li>
						))}
						<li className="page-item">
							<button
								onClick={() => setCurrentPage(currentPage + 1)}
								className="btn page-link mx-1"
							>
								Next
							</button>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Pagination;
