import React from "react";
import { useFirebase } from "react-redux-firebase";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const SignedInLinks = () => {
  const firebase = useFirebase();
  const profile = useSelector((state) => state.firebase.profile);
  const signOut = () => firebase.logout();
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
        <NavLink to="/" onClick={signOut}>
          Log Out
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          {profile.initials}
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
