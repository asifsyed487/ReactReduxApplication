import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import "./HomeButton.css";
function HomeButton() {
  return (
    <div className="button" title="Go to Homepage">
      <Link to="/">
        <div className="nav-button new-home-button">
          <HomeIcon />
        </div>
      </Link>
    </div>
  );
}

export default HomeButton;
