import firebaseConfig from "./Firebase.Config";
import { initializeApp } from "firebase/app";

const InitialFirebase = () => {
	initializeApp(firebaseConfig);
};

export default InitialFirebase;
