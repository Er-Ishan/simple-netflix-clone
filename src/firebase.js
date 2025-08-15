import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from  'firebase/auth'
import { addDoc, getFirestore } from "firebase/firestore/lite";
import { signOut } from "firebase/auth/cordova";

const firebaseConfig = {
  apiKey: "AIzaSyAMoJNMc12naKvJoHbchfwtlrgVNLU1Ops",
  authDomain: "netflixclone-d81a1.firebaseapp.com",
  projectId: "netflixclone-d81a1",
  storageBucket: "netflixclone-d81a1.appspot.com",
  messagingSenderId: "581186059542",
  appId: "1:581186059542:web:b4652a65d1e7d4baa2e437",
  measurementId: "G-3BX5SKY9RF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth= getAuth(app);
const db = getFirestore(app);

const signup = async (name,email, password)=>{
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"),{
            uid:user.uid,
            name, 
            authProvider:"local",
            email,
        });
    }
    catch(error){
        console.log(error);
        alert(error);
    }
}

const login = async (email, password)=>{
    try{
        await signInWithEmailAndPassword(auth, email, password);  
    }catch(error){
        console.log(error);
        alert(error);
    }
}

const logout = () =>{
    signOut(auth);
}

export {auth, db, login, signup, logout};