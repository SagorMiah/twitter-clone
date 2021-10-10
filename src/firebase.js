import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD0YkSQ5w0jwGBeMPJ6LDnDOLm8UrAb2s4",
  authDomain: "twitter-clone-8ccff.firebaseapp.com",
  projectId: "twitter-clone-8ccff",
  storageBucket: "twitter-clone-8ccff.appspot.com",
  messagingSenderId: "260005600464",
  appId: "1:260005600464:web:0d2980f8651a8a25cd92d5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
