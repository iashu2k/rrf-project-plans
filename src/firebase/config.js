import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC8sYRHST0PI33aP_MmwdHfRHVaYXfxOmc",
  authDomain: "project-plans-14296.firebaseapp.com",
  databaseURL: "https://project-plans-14296.firebaseio.com",
  projectId: "project-plans-14296",
  storageBucket: "project-plans-14296.appspot.com",
  messagingSenderId: "313167345647",
  appId: "1:313167345647:web:1c94ead16eff534eeee81a",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export default firebase;
