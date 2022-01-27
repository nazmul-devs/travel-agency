import React from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";

const PrivateRoute = () => {
	const { user, loading } = UseAuth();
	const location = useLocation;
	if (loading) {
		return (
			<div
				className="d-flex justify-content-center align-items-center"
				style={{ minHeight: "90vh" }}
			>
				<Spinner animation="grow" />
			</div>
		);
	}

	if (user.email) {
		return <Outlet />;
	}
	return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
