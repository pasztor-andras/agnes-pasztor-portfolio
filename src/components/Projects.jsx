import React from "react";
import amboss from "../images/amboss-logo.png";
import omixon from "../images/omixon-logo.png";

export const Projects = () => {
  const projectOneUrl = "https://www.amboss.com/us";
  const projectTwoUrl = "https://www.omixon.com/products/hla-twin";

  function GoToProjectOne() {
    window.open(projectOneUrl);
  }
  function GoToProjectTwo() {
    window.open(projectTwoUrl);
  }

  return (
    <div className="mid-section project-container">
      <div className="project-card">
        <img className="projects-logo" src={amboss} alt="amboss" />
        <form action={projectOneUrl}>
          <input type="button" onClick={GoToProjectOne} value="Read more" />
        </form>
      </div>
      <p className="section-title">Projects</p>
      <div className="project-card">
        <img className="projects-logo" src={omixon} alt="omixon" />
        <form action={projectTwoUrl}>
          <input type="button" onClick={GoToProjectTwo} value="Read more" />
        </form>
      </div>
    </div>
  );
};
