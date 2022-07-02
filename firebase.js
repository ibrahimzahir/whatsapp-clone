import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAtcKICpw4IBZfGksLpppB3XQ0_2O40Fg8",
  authDomain: "whatsapp-2-335e7.firebaseapp.com",
  projectId: "whatsapp-2-335e7",
  storageBucket: "whatsapp-2-335e7.appspot.com",
  messagingSenderId: "300706003278",
  appId: "1:300706003278:web:4edb151fa461efb39d061f",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
