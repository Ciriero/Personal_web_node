import styled from "styled-components";

export const HeroContainer = styled.header`
  background-color: ${({ theme }) => theme.bodyHero};
  transition: var(--transitionMode);
`;

export const HeroCenter = styled.div`
  width: 90vw;
  margin: 0rem auto;
  max-width: 1170px;
  margin-top: 5rem;
  min-height: calc(100vh - 5rem);
  display: grid;
  place-items: center;
  .hero-img {
    display: none;
  }

  .hero-info {
    h1 {
      color: ${({ theme }) => theme.colorHero};
      transition: var(--transitionMode);
    }
    h4 {
      margin-bottom: 0.5rem;
      letter-spacing: 0.5rem;
      line-height: 2rem;
      color: ${({ theme }) => theme.colorHero};
      transition: var(--transitionMode);
    }
    .btn {
      background-color: ${({ theme }) => theme.bgherobtn};
      color: ${({ theme }) => theme.colorherobtn};
      :hover {
        background-color: ${({ theme }) => theme.bgherobtnhover};
      }
    }
  }
  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    .hero-photo {
      max-width: 25rem;
      max-height: 30rem;
      object-fit: cover;
      border-radius: var(--radius);
      position: relative;
    }
    .hero-img {
      display: block;
      position: relative;
      border-radius: var(--radius);
      border: 2px solid var(--clr-primary-2);
    }
  }
`;

export const HeroSocial = styled.div`
  font-size: 1.5rem;

  svg {
    margin-right: 2rem;
    margin-top: 3rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colorlogohero};
    transition: var(--transitionMode);
    :hover {
      color: var(--clr-primary-5);
    }
  }
`;

export const BtnDark = styled.button`
  margin-top: 3rem;
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  
  box-shadow: 5px 5px 3px 0px rgba(0, 0, 0, 0.27);
  transition: var(--transitionMode);
  background-color: ${({ theme }) => theme.brndark};
  :active {
    box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 0.4);
    transform: scale(95%);
  }
  svg {
    color: ${({ theme }) => theme.colorsvgdard};
    transition: var(--transitionMode);
  }
`;
