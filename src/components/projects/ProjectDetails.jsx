import React from "react";
import { useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";
import moment from "moment";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();

  useFirestoreConnect([
    {
      collection: "projects",
      doc: id,
    },
  ]);

  // const firestore = useSelector((state) => state.firestore);

  const project = useSelector(({ firestore: { data } }) =>
    data.projects ? data.projects[id] : null
  );

  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {project.authorFirstName} {project.authorLastName}
            </div>
            <div>{moment(project.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading Project....</p>
      </div>
    );
  }
};

export default ProjectDetails;
