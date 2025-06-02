import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth"; 
import {addDoc, collection, getFirestore} from "firebase/firestore"
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAhM1CJkGlsCFOERlV1K_sLrh4FQxKrUms",
  authDomain: "netflix-clone-9a4ea.firebaseapp.com",
  projectId: "netflix-clone-9a4ea",
  storageBucket: "netflix-clone-9a4ea.firebasestorage.app",
  messagingSenderId: "261132103560",
  appId: "1:261132103560:web:b2f949890fcaa8240c943d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // <-- You need to CALL getAuth()
const db= getFirestore(app);

const signup = async (name,email,password)=>{
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local", 
            email,
        })
    }catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async(email, password)=>{
    try{
        await signInWithEmailAndPassword(auth, email, password);
    }catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = ()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout}
