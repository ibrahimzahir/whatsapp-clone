import firebase from "firebase";

const firebaseConfig = {
  apiKey: "YOUR API KEY",
  authDomain: "YOUR AUTH DOMAIN",
  projectId: "YOUR PROJECT ID",
  storageBucket: "YOUR STORAGE BUCKETID",
  messagingSenderId: "YOUR MESSAGE SENDER ID",
  appId: "YOUR APP ID",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
