import { useEffect, useState } from "react";
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	signOut,
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import InitialFirebase from "../Firebase/InitialFirebase";
import axios from "axios";

// const path = location?.state?.from || "/";
// history.replace(path);

InitialFirebase();
const googleProvider = new GoogleAuthProvider();

// ===============================function==================//
const UseFirebase = () => {
	const [admin, setAdmin] = useState(null);
	const [blogs, setBlogs] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
	const [user, setUser] = useState({});
	const auth = getAuth();

	//================== google login=================
	const gooleLogin = (location, navigate) => {
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				const path = location?.state?.from || "/";
				navigate(path);
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => setLoading(false));
	};

	// =================user register=============
	const newUserRegister = (data, location, navigate) => {
		const { email, password, name } = data;
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const newUser = { email, displayName: name };
				setUser(newUser);
				updateProfile(auth.currentUser, {
					displayName: name,
				})
					.then(() => {})
					.catch((error) => {
						setError(error.message);
					});
				const path = location?.state?.from || "/";
				navigate(path);
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => setLoading(false));
	};

	// ==============login user=============
	const loginUser = (data, location, history) => {
		signInWithEmailAndPassword(auth, data.email, data.password)
			.then((userCredential) => {
				const path = location?.state?.from || "/";
				history.replace(path);
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => setLoading(false));
	};

	// onauth state change
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser({});
			}
			setLoading(false);
			setError("");
		});
		return unsubscribe;
	}, [auth]);
	// logout
	const logOut = () => {
		signOut(auth)
			.then(() => {
				setUser({});
			})
			.catch((error) => {
				// An error happened.
			});
	};

	// Get blogs
	useEffect(() => {
		axios
			.get("http://localhost:5000/blogs")
			.then(function (response) {
				// handle success
				setBlogs(response.data);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.then(function () {
				// always executed
			});
	}, []);
	// =======================return=============================//
	return {
		logOut,
		gooleLogin,
		admin,
		error,
		user,
		loginUser,
		newUserRegister,
		loading,
		blogs,
	};
};

export default UseFirebase;
