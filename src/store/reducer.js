import { combineReducers } from "@reduxjs/toolkit";
import project from "./project";
import auth from "./auth";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

export default combineReducers({
  project,
  auth,
  firebase: firebaseReducer,
  firestore: firestoreReducer 
});
