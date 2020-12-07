import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
  name: "project",
  initialState: {
    list: [
      { id: "1", title: "help me find a peach", content: "blah blah blah" },
      { id: "2", title: "collect all the stars", content: "blah blah blah" },
      { id: "3", title: "egg hunt with yoshi", content: "blah blah blah" },
    ],
  },

  reducers: {
    addProject: (projects, action) => {
      console.log('project added', action.payload);
    },
    addProjectErr: (projects, action) => {
      console.log('add project error', action.payload);
    }
  },
});

export const {addProject, addProjectErr} = slice.actions;
export default slice.reducer;

export const createProject = (project) => (
  dispatch,
  getstate,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();
  firestore.collection('projects').add({
    ...project,
    authorFirstName: 'Ashu',
    authorLastName: 'Mishra',
    authorId: 12345,
    createdAt: new Date()
  }).then(()=>{
    dispatch(addProject({project}));
  }).catch((err)=>{
    dispatch(addProjectErr({err}));
  })
};
