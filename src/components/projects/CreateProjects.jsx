import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useFirestore } from "react-redux-firebase";
import { timestamp } from "../../firebase/config";
import {useHistory} from "react-router-dom";

const CreateProjects = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const firestore = useFirestore();
  const history = useHistory();
  const profile = useSelector((state) => state.firebase.profile);
  const uid = useSelector((state) => state.firebase.auth.uid);

  const handleChange = (e) => {
    if (e.target.id === "title") {
      setTitle(e.target.value);
    } else {
      setContent(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      title,
      content,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: uid,
      createdAt: timestamp(),
    };
    console.log(newProject);
    firestore
      .collection("projects")
      .add(newProject)
      .then(() => history.push("/"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <form className="white" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3">Create a New Project</h5>
        <div className="input-field">
          <input type="text" id="title" onChange={handleChange} />
          <label htmlFor="title">Project Title</label>
        </div>
        <div className="input-field">
          <textarea
            id="content"
            className="materialize-textarea"
            onChange={handleChange}
          ></textarea>
          <label htmlFor="content">Project Content</label>
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1">Create</button>
        </div>
      </form>
    </div>
  );
};

export default CreateProjects;
