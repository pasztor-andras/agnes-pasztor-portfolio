import React from "react";
import { useSpring, animated } from "react-spring";

export const Experience = () => {
  const slidingTimes = useSpring({ from: { opacity: 0, marginTop: -500 }, to: { opacity: 1, marginTop: 0 }, config: { duration: 2000 } });

  return (
    <div className="exp-container">
      <span>Experience timeline</span>
      <div className="exp-timeline">
        <div className="exp-card left">
          <div className="content">
            <h2>2017</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur fugiat unde, odit nesciunt expedita amet reprehenderit facere ipsam
              impedit ea voluptas, incidunt aspernatur, aliquid voluptatum sunt! Harum nemo deserunt quidem.
            </p>
          </div>
        </div>
        <div className="exp-card right">
          <div className="content">
            <h2>2016</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur fugiat unde, odit nesciunt expedita amet reprehenderit facere ipsam
              impedit ea voluptas, incidunt aspernatur, aliquid voluptatum sunt! Harum nemo deserunt quidem.
            </p>
          </div>
        </div>
        <div className="exp-card left">
          <div className="content">
            <h2>2017</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur fugiat unde, odit nesciunt expedita amet reprehenderit facere ipsam
              impedit ea voluptas, incidunt aspernatur, aliquid voluptatum sunt! Harum nemo deserunt quidem.
            </p>
          </div>
        </div>
        <div className="exp-card right">
          <div className="content">
            <h2>2016</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur fugiat unde, odit nesciunt expedita amet reprehenderit facere ipsam
              impedit ea voluptas, incidunt aspernatur, aliquid voluptatum sunt! Harum nemo deserunt quidem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
