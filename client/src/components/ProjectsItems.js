import React from "react";
import { ButtonProyect } from "../styles/Proyects.styles";

const ProjectsItems = ({ item }) => {
  return (
    <article className="card" data-aos="fade-up">
      <img src={item.image} alt={item.title} />
      <div className="card-info">
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </div>
      <div className="card-footer">
        <a href={item.href} target="_blank">
          <ButtonProyect>GIT</ButtonProyect>
        </a>
      </div>
    </article>
  );
};

export default ProjectsItems;
