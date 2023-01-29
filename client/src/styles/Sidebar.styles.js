import styled from "styled-components";

export const BtnClose = styled.button`
  background-color: transparent;
  border-color: transparent;
  color: ${({theme}) => theme.btnclose};
  font-size: 2rem;
  position: relative;
  svg {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    cursor: pointer;
  }
`;

export const LibraryContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({theme}) => theme.sidebar};
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  transform: ${(props) =>
    props.isOpen ? "translate(0%)" : "translate(-100%)"};
  transition: 1s all ease-in-out;
  padding: 1rem;
  z-index: 99;
  .side-items {
    margin-top: 10rem;
  }
  li {
    margin-bottom: 2rem;
  }
  a {
    font-size: 1.5rem;
    color: ${({theme}) => theme.sidebarmenu};
    transition: 0.5s all ease;
    :hover {
      color: var(--clr-primary-5);
    }
  }

  @media screen and (min-width: 992px) {
    display: none;
  }
`;

export const Social = styled.div`
  svg {
    font-size: 1.5rem;
    margin: 1rem 2rem;
    cursor: pointer;
    transition: 0.5s all ease;
    :hover {
      color: var(--clr-primary-5);
    }
  }
`;
