import styled from "styled-components";

export const NavContainer = styled.nav`
  height: 5rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  z-index: 10;
  justify-content: center;
  /* background-color: ${(props) =>
    props.navbar ? "var(--clr-white)" : "var(--clr-primary-10)"}; */
    background-color: ${(props) =>
    props.navbar && props.theme ? props.theme.navbar : props.theme.navbar2};
  transition: var(--transitionMode);
  box-shadow: ${(props) =>
    props.navbar ? "0px 14px 12px -3px rgba(0,0,0,0.61)" : ""};
`;

export const NavCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1100px;
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3 {
      text-shadow: 5px 4px 8px rgba(0, 0, 0, 0.47);
    }
    a{
      color: ${({theme}) => theme.namenavbar};
      transition: var(--transitionMode);
      
    }
    span {
      color: var(--clr-primary-5);
    }
    .nav-btn {
      background-color: transparent;
      border-color: transparent;
      color: var(--clr-primary-5);
      font-size: 2rem;
      cursor: pointer;
      justify-self: end;
    }
  }
  .nav-links {
    display: none;

  }
  @media screen and (min-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .nav-btn {
      display: none;
    }
    .nav-links {
      display: flex;
      justify-content: center;

      li {
        margin: 0.05rem;
      }
      a {
        color: ${({theme}) => theme.navlinkscolor};
        font-size: 1rem;
        font-weight: bold;
        text-transform: capitalize;
        letter-spacing: 0.1rem;
        padding: 0.5rem;
      }
    }
  }
`;
