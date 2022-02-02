import React, { useState } from "react";
import { motion } from "framer-motion";

export const Projects = () => {
  const projectOneUrl = "https://www.ambos.com/us";
  const projectTwoUrl = "https://www.omixon.com/products/hla-twin";

  return (
    <div className="mid-section project-container">
      <div className="project-card">
        <div className="project-card-inner">
          <div className="project-card-front">
            <h1>Project1</h1>
          </div>
          <div className="project-card-back">
            <h1>Amboss</h1>
            <p>{projectOneUrl}</p>
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
            <p>{projectTwoUrl}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
