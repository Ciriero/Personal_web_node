import React from "react";
import { LibraryContainer, BtnClose, Social } from "../styles/Sidebar.styles";
import { FaTimes, FaLinkedin } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { menu } from "../data/menu";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <LibraryContainer isOpen={isOpen}>
      <BtnClose onClick={() => setIsOpen(!isOpen)}>
        <FaTimes />
      </BtnClose>

      <ul className="side-items">
        {menu.map((item) => (
          <li key={item.id}>
            <a href={item.href} onClick={() => setIsOpen(!isOpen)}>
              {item.title}
            </a>
          </li>
        ))}
        <Social>
          <a href="https://www.linkedin.com/in/ciriero/" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Ciriero" target="_blank">
            <ImGithub />
          </a>
        </Social>
      </ul>
    </LibraryContainer>
  );
};

export default Sidebar;
