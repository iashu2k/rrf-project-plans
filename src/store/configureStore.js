import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
// import fbConfig from "../firebase/config";


const store = configureStore({
  reducer
  // middleware,
  // enhancers: [reduxFirestore(fbConfig), reactReduxFirebase(fbConfig)],
});

export default store;
// const extraArgument = {
//   getFirebase,
//   getFirestore,
// };

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [
//         // just ignore every redux-firebase and react-redux-firebase action type
//         ...Object.keys(rfConstants.actionTypes).map(
//           (type) => `${rfConstants.actionsPrefix}/${type}`
//         ),
//         ...Object.keys(rrfActionTypes).map(
//           (type) => `@@reactReduxFirebase/${type}`
//         ),
//       ],
//       ignoredPaths: ["firebase", "firestore"],
//     },
//     thunk: {
//       extraArgument,
//     },
//   }),
// ];


