import React, { useState } from "react";
import { useSpring, a } from "react-spring";

export const Projects = () => {
  const [showFlippedCardOne, setShowFlippedCardOne] = useState(false);

  const { transform, opacity } = useSpring({
    opacity: showFlippedCardOne ? 0 : 1,
    tranfsorm: `perspective(600px) rotateY(${showFlippedCardOne ? 180 : 0}deg)`,
    config: { mass: 5, tension: 1000, friction: 80 },
  });  

  const FlipperFunction = () => {
    setShowFlippedCardOne(state => !state)
  }
  
 
 const projectOneUrl = "https://www.ambos.com/us"
 const projectTwoUrl = "https://www.omixon.com/products/hla-twin"

  return (
    <div className="mid-section project-container">
      <div className="project-card">
        <div className="project-card-inner" onClick={FlipperFunction}>
          <a.div
            className="project-card-front"
            style={{
              opacity,
              transform,
              rotateY: "180deg",
            }}
          >
            <h1>Project1</h1>
          </a.div>
          <a.div className="project-card-back" style={{ opacity: opacity.to(o => 1 - o), transform }}>
            <h1>Amboss</h1>
            <p>{projectOneUrl}</p>
          </a.div>
        </div>
      </div>
      <div className="project-card">
        <div className="project-card-inner">
          <a.div className="project-card-front" style={{
              opacity,
              transform,
              rotateY: "180deg",
            }}>
            <h1>Project2</h1>
          </a.div>
          <a.div className="project-card-back" style={{ opacity: opacity.to(o => 1 - o), transform }}>
            <h1>Omixon</h1>
            <p>{projectTwoUrl}</p>
          </a.div>
        </div>
      </div>
    </div>
  );
};
