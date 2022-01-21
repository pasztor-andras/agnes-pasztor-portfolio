import React from "react";
import sql from "../icons/001-sql.png";
import selenium from "../icons/003-selenium.png";
import js from "../icons/005-javascript.png";
import api from "../icons/010-api-1.png";

export const Skills = () => {
  return (
    <div className="mid-section">
      <ul className="skills-container">
        <li>
          <img src={sql} alt="" />
        </li>
        <li>
          <img src={selenium} alt="" />
        </li>
        <li>
          <img src={js} alt="" />
        </li>
        <li>
          <img src={api} alt="" />
        </li>
      </ul>
    </div>
  );
};
