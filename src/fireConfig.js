import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
   
        apiKey: "AIzaSyCsm-BXCy99bfeGyTPAi95RDhw0q8dVeLk",
        authDomain: "authuser-13304.firebaseapp.com",
        projectId: "authuser-13304",
        storageBucket: "authuser-13304.appspot.com",
        messagingSenderId: "773947069778",
        appId: "1:773947069778:web:707c9effb3bfa4e333168b"
   
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app)
export default db;
