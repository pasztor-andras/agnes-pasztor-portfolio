import React from "react";

export const Projects = () => {
  return (
    <div className="mid-section project-container">
      <div className="project-card">
        <div className="project-card-inner">
          <div className="project-card-front">
            <h1>Project1</h1>
          </div>
          <div className="project-card-back">
            <h1>Amboss</h1>
            <p>https://www.ambos.com/us</p>
            <button>More information</button>
          </div>
        </div>
      </div>
      <div className="project-card">
        <div className="project-card-inner">
          <div className="project-card-front">
          <h1>Project2</h1>
          </div>
          <div className="project-card-back">
          <h1>Omixon</h1>
            <p>https://www.omixon.com/products/hla-twin</p>
            <button>More information</button>
          </div>
        </div>
      </div>
    </div>
  );
};
