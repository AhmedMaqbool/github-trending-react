import React from "react";
import "../NavBar/NavBar.css";
import { Link, useLocation } from "react-router-dom";
import { TriangleDownIcon } from "@primer/octicons-react";

function NavBar(props) {
  const { value } = props;
  const { pathname } = useLocation();

  return (
    <div className="navbar">
      <div className="buttons">
        <Link to="/" className={`repo ${pathname === "/" ? "active" : ""}`}>
          Repositries
        </Link>
        <Link
          to="/developers"
          className={`dev ${pathname === "/developers" ? "active" : ""}`}
        >
          Developers
        </Link>
      </div>

      <div className="select">
        {value === "true" ? (
          <span>
            Spoken Languages Any <TriangleDownIcon size={16} />
          </span>
        ) : null}
        <span>
          Languages Any <TriangleDownIcon size={16} />
        </span>
        <span>
          Date Range Today
          <TriangleDownIcon size={16} />
        </span>
      </div>
    </div>
  );
}

export default NavBar;
