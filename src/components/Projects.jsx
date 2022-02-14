import React from "react";
import amboss from "../images/Amboss.png";
import omixon from "../images/omixon-logo.png"

export const Projects = () => {
  const projectOneUrl = "https://www.amboss.com/us";
  const projectTwoUrl = "https://www.omixon.com/products/hla-twin";

  return (
    <div className="mid-section project-container">
      <div className="project-card">
        <div className="project-card-inner">
          <img className="projects-logo" src={amboss} alt="amboss" />
          {/* <h1>Amboss</h1>
          <a href={projectOneUrl} target="_blank" rel="noopener noreferrer">
            {projectOneUrl}
          </a> */}
        </div>
      </div>
      <div className="project-card">
        <div className="project-card-inner">
          <img src={omixon} alt="omixon" />
          {/* <h1>Omixon</h1>
          <a href={projectTwoUrl} target="_blank" rel="noopener noreferrer">
            {projectTwoUrl}
          </a> */}
        </div>
      </div>
    </div>
  );
};
