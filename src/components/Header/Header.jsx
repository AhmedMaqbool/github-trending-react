import React from "react";
import "../Header/Header.css";

function Header(props) {
  return (
    <div className="header">
      <h1>Trending</h1>
      <p>{props.value}</p>
    </div>
  );
}

export default Header;
