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
            <h1>Cég</h1>
            <p>Leírás valami,valami,valami</p>
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
          <h1>Cég</h1>
            <p>Leírás valami,valami,valami</p>
            <button>More information</button>
          </div>
        </div>
      </div>
      <div className="project-card">
        <div className="project-card-inner">
          <div className="project-card-front">
          <h1>Project3</h1>
          </div>
          <div className="project-card-back">
          <h1>Cég</h1>
            <p>Leírás valami,valami,valami</p>
            <button>More information</button>
          </div>
        </div>
      </div>
    </div>
  );
};
