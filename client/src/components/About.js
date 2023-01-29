import React, { useEffect } from "react";
import CV from "../assets/CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { WrapperAbout, AboutCenter } from "../styles/About.styles";
import cc2 from "../img/Foto0209-2.jpg"

const About = () => {
  return (
    <WrapperAbout id="about">
      <section className="section about">
        <AboutCenter>
          <article className="about-img" data-aos="fade-down">
            <img
              src={cc2}
              alt="Christian2"
              className="about-photo"
            />
          </article>
          <article className="about-info" data-aos="fade-in">
            <div className="about-title">
              <h2>About</h2>
              <div className="underline"></div>
              <p>
                Mi nombre es Christian y soy <b>desarrollador frontend</b>. Hace
                dos años que comencé a estudiar programación y, desde entonces,
                no he dejado de aprender: pequeños cursos, grandes cursos,
                tutoriales, preguntas en foros, errores aparentemente
                inexplicables que, finalmente, encuentran solución y muchas,
                muchísimas repeticiones y proyectos.
              </p>
              <p>
                Además, estoy certificado como Full Stack por{" "}
                <a href="https://www.thebridge.tech/" target="_blank">
                  The Bridge.
                </a>
              </p>
              <p>
                Actualmente estoy desarrollando un e-commerce, una pequeña
                editorial, con React y Styled-Components para el front y Node, y
                Express y MongoDB para el backend. También estoy aprendiendo
                testing con Jest.
              </p>
              <p>¡Puedes descargar mi currículum justo aquí debajo!</p>
            </div>

            <a href={CV} download className="btn">
              Descargar CV <AiOutlineDownload />
            </a>
          </article>
        </AboutCenter>
      </section>
    </WrapperAbout>
  );
};

export default About;
