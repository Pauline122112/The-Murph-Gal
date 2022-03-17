import { initializeApp } from "firebase/app";
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase'

const firebaseConfig = {
	apiKey: "AIzaSyBBIEcntHb9QNaq3078Ptt4BuiO3W5z4q8",
	authDomain: "murphy-portfolio.firebaseapp.com",
	projectId: "murphy-portfolio",
	storageBucket: "murphy-portfolio.appspot.com",
	messagingSenderId: "181524391616",
	appId: "1:181524391616:web:38821b5313095f56fb6f25",
}
const app = initializeApp(firebaseConfig)


const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()

export { projectStorage, projectFirestore }

