import React, { useState } from "react";
import { WrapperProyects, WrapperCenter } from "../styles/Proyects.styles";
import { projects } from "../data/proyects";
import { logos } from "../data/logos";
import ProjectsItems from "./ProjectsItems";
import LogoItem from "./LogoItem";

const Proyects = () => {
  const [active, setActive] = useState("pro");
  return (
    <WrapperProyects id="projects">
      <div className="title-portfolio">
        <h2>Portfolio</h2>
        <div className="underline udl"></div>
        <p className="intro-proyect">
          Abajo te dejo una selección de algunos proyectos que he subido a
          GitHub así como de las tecnologías que he utilizado.<br />¡Si te apetece,
          haz un pull request!
        </p>
        <div className="buttons">
          <button
            className={active === "tec" ? "btn-proy" : "claseb"}
            onClick={() => setActive("pro")}
            active={`${active} === "pro`}
          >
            Proyectos
          </button>
          <button
            className={active === "pro" ? "btn-proy" : "claseb"}
            onClick={() => setActive("tec")}
            active={`${active} === "tec`}
          >
            Tecnologías
          </button>
        </div>
      </div>

      <WrapperCenter>
        <>
          {active === "pro" &&
            projects.map((item) => <ProjectsItems key={item.id} item={item} />)}
          {active === "tec" &&
            logos.map((logo) => <LogoItem key={logo.id} logo={logo} />)}
        </>
      </WrapperCenter>
    </WrapperProyects>
  );
};

export default Proyects;
