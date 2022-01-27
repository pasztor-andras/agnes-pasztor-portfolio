import React from "react";
import dataeng2 from "../icons/dataeng2.png";
import dataeng3 from "../icons/dataeng3.png";
import python from "../icons/002-python.png";
import sql from "../icons/001-sql.png";
import js from "../icons/001-javascript.png";
import cypress from "../icons/cypress-black.png";
import selenium from "../icons/003-selenium.png";
import java from "../icons/005-javascript.png";
import bash from "../icons/bash.png";

export const Skills = () => {
  return (
    <div className="mid-section">
      <div className="skills-container">
        <div className="skills-background">
          <img className="icons" src={dataeng2} alt="data engineering" />
        </div>
        <div className="skills-background">
          <img className="icons" src={dataeng3} alt="data engineering" />
        </div>
        <div className="skills-background">
          <img className="icons" src={python} alt="python" />
        </div>
        <div className="skills-background">
          <img className="icons" src={sql} alt="sql" />
        </div>
      </div>
      <div className="skills-container">
        <div className="skills-background">
          <img className="icons" src={js} alt="" />
        </div>
        <div className="skills-background">
          <img className="icons" src={cypress} alt="" />
        </div>
        <div className="skills-background">
          <img className="icons" src={selenium} alt="" />
        </div>
        <div className="skills-background">
          <img className="icons" src={java} alt="" />
        </div>
        <div className="skills-background">
          <img className="icons" src={bash} alt="" />
        </div>
      </div>
    </div>
  );
};
