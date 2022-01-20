import React from "react";
import portfolio from "../images/About-img.jpg"

export const Aboutme = () => {
  return (
    <div className="mid-section about-container">
      <div className="about-img"><img className="port-img" src={portfolio} alt="profile" /></div>
      <div className="about-text-container">
        <div className="about-text-header"></div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nulla odio, alias cupiditate molestias quidem error. Voluptates quibusdam corporis
        numquam unde, libero, eum quae nulla voluptatem, alias sunt doloremque beatae? Eligendi eius quos illum incidunt, saepe magni? Facere rerum
        dolorum non vero quo odio amet aspernatur corporis fugit sapiente dignissimos, laborum aut hic veniam debitis nisi praesentium? Alias, aut
        porro. Quod, quia quas sint, eligendi eos tempore quisquam a quae optio in dignissimos possimus voluptate voluptates unde ad beatae,
        voluptatem repellat error id necessitatibus suscipit consequatur! Nulla iusto illum dolorum?
      </div>
    </div>
  );
};
