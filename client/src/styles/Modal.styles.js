import styled from "styled-components";

export const ModalContent = styled.div`
  color: var(--clr-white);
  background-color: var(--clr-primary-5);
  transform: ${(props) =>
    props.modalStatus && props.contentModal? "translate(0%)" : "translate(100%)"};
  transition: 1s all ease-in-out;
  min-width: 40%;
  height: 5rem;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.2);
  border: 1px solid var(--clr-white);
  text-transform: uppercase;
  position: fixed;
  top: 6rem;
  right: 0rem;
  letter-spacing: 0.1;
  text-align: left;
  line-height: 5rem;
  padding: 0rem 2rem;
  @media screen and (max-width: 300px){
    width: 90%;
    font-size: 0.6rem;
  }
  p {
    color: var(--clr-white);
    
  }

`