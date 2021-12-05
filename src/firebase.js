import firebase from "firebase/compat";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD0ItNIk3PU3_S76ye4RZU8KbIQQMttzSc",
  authDomain: "notifiny-19ee8.firebaseapp.com",
  projectId: "notifiny-19ee8",
  storageBucket: "notifiny-19ee8.appspot.com",
  messagingSenderId: "1011109653975",
  appId: "1:1011109653975:web:0a6e2aa8b78f03ba03af92",
  measurementId: "G-ZG2W9KZDPT",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export {auth,provider,db};