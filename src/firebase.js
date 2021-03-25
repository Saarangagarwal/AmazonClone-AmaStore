import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCbP8o1TslLb87weoA61-kx_pSUa7F0Z2A",
    authDomain: "ama-store1.firebaseapp.com",
    projectId: "ama-store1",
    storageBucket: "ama-store1.appspot.com",
    messagingSenderId: "467162003670",
    appId: "1:467162003670:web:d8c685f82a2e1e260db177",
    measurementId: "G-0CE98GQGQR"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

//initialize the database
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };