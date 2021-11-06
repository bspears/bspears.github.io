import React from "react";
import {
    Link
  } from "react-router-dom";
 import "./styles.scss";

function AppHeader(props) {
    const { userName, logo, siteTitle } = props;

    return (
        <header className="app-header">
            <Link to={"/"}><img className="logo" src={logo} /></Link>
            <div className="view-title">{siteTitle}</div>
            <Link to="/profile">Welcome {userName}</Link>
        </header>
    );
}

export default AppHeader;