import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAILpsWt_jljlfLbD_EiedIrRe0yJFtH68",
  authDomain: "basic-banking-page.firebaseapp.com",
  projectId: "basic-banking-page",
  databaseURL:"https://basic-banking-page-default-rtdb.asia-southeast1.firebasedatabase.app/",
  storageBucket: "basic-banking-page.appspot.com",
  messagingSenderId: "751726183414",
  appId: "1:751726183414:web:7359b86ff49d352e6cfdd7"
};

const app=initializeApp(firebaseConfig);

const db=getFirestore(app);

export default db;
