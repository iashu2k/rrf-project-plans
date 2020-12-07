import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { useSelector } from "react-redux";
import { useFirebase, isEmpty } from "react-redux-firebase";

const Navbar = () => {
  const firebase = useFirebase();
  const auth = useSelector((state) => state.firebase.auth);

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Project Plans
        </Link>
        {isEmpty(auth) ? <SignedOutLinks /> : <SignedInLinks />}
      </div>
    </nav>
  );
};

export default Navbar;
