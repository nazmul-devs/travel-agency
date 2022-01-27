import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const UseAuth = () => {
	const auth = useContext(AuthContext);
	return auth;
};

export default UseAuth;
