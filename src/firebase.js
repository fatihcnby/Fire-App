import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  
  authDomain: "fireapp-445dd.firebaseapp.com",
  projectId: "fireapp-445dd",
  storageBucket: "fireapp-445dd.appspot.com",
  messagingSenderId: "305355042993",
  appId: "1:305355042993:web:21d61a8032f12b1223f290",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)