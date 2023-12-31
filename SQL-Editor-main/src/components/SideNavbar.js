import React from "react";
import "./SideNavbar.scss";
import { exit, logo } from "../assets/svgFile";

const links = [
  { label: "Getting Started", value: "getting-started" },
  { label: "Tables", value: "tables" },
  { label: "Query Editor", value: "query-editor" }
];

const SideNavbar = () => {
  return (
    <div className="side-navbar">
      <div className="app-logo">{logo()}</div>
      <hr className="h-line" />
      <div className="nav-links">
        <ul className="link-items">
          {links.map((link) => (
            <li
              key={link.value}
              className={`link-item ${
                "query-editor" === link.value && "active"
              }`}
            >
              {link.label}
            </li>
          ))}
        </ul>
      </div>
      <div className="logout">
        <span className="icon">{exit()}</span>
        <span className="text">Logout</span>
      </div>
    </div>
  );
};

export default SideNavbar;
