import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/database"

const firebaseConfig = {
	apiKey: "AIzaSyBBIEcntHb9QNaq3078Ptt4BuiO3W5z4q8",
	authDomain: "murphy-portfolio.firebaseapp.com",
	projectId: "murphy-portfolio",
	storageBucket: "murphy-portfolio.appspot.com",
	messagingSenderId: "181524391616",
	appId: "1:181524391616:web:38821b5313095f56fb6f25",
};
const firebaseApp = firebase.initializeApp(firebaseConfig)


const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };

