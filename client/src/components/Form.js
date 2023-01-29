import React, { useEffect, useState } from "react";
import { WrapperForm, FormCenter, FormInfo } from "../styles/Form.styles";
import swal from "sweetalert";
import ErrorForm from "./ErrorForm";
import emailsv from "../img/email.svg";
import axios from "axios";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [emailError, setEmailError] = useState();
  const [modalStatus, setModalStatus] = useState(false);
  const [contentModal, setContentModal] = useState("");
  const [permanentModal, setPermanentModal] = useState(contentModal);

  useEffect(() => {
    validateEmail({ email, setEmailError });
  }, [email]);

  const handleClic = async (e) => {
    e.preventDefault();
    try {
      let data = {
        email,
        name,
        text,
      };
      const res = await axios.post(`http://localhost:5000/send`, data);

      if (
        name.trim().length === 0 ||
        email.trim().length === 0 ||
        text.trim().length === 0
      ) {
        swal("Cumplimenta todos los campos, por favor");
      } else {
        swal(`¡Gracias, ${name}!`, "Te responderé lo antes posible", "success");
        setEmail("");
        setText("");
        setName("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const validateEmail = ({ email, setEmailError }) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return email && !email.match(regex)
      ? setEmailError("Email sin formato válido")
      : setEmailError("");
  };

  const closeModal = () => {
    setModalStatus(false);
    // setContentModal("");
    setPermanentModal(contentModal);
  };

  return (
    <WrapperForm id="contact">
      <div className="form-title">
        <h2 data-aos="fade-in">Contacto</h2>
        <div className="underline udl"></div>
      </div>
      <FormCenter>
        <article className="form-img">
          <img src={emailsv} alt="form" className="form-photo" />
        </article>
        <FormInfo className="form-info">
          <form action="" onSubmit={handleClic}>
            <label htmlFor="name" className="label-name">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-name"
              placeholder="Nombre"
            />
            <label htmlFor="email" className="label-email">
              Email
              {emailError && <ErrorForm error={emailError} />}
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-email"
              placeholder="Email"
            />

            <label htmlFor="text" className="label-text">
              Texto
            </label>
            <textarea
              name="text"
              cols="30"
              rows="10"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="input-text"
              placeholder="Escribe..."
            ></textarea>
            <button className="btn btn-form">Enviar</button>
            {/* {
              <Modal
                closeModal={closeModal}
                contentModal={contentModal}
                modalStatus={modalStatus}
                permanentModal={permanentModal}
              />
            } */}
          </form>
        </FormInfo>
      </FormCenter>
    </WrapperForm>
  );
};

export default Form;
