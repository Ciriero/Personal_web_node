import styled from "styled-components";

export const WrapperAbout = styled.div`
  padding-top: 5rem;
  background-color: ${({theme}) => theme.aboutbg};
  transition: var(--transitionMode);
  .about {
    max-width: 1170px;
    width: 80vw;
    margin: 0 auto;
  }
`;

export const AboutCenter = styled.div`
  display: grid;
  gap: 3rem;
  .about-img {
    justify-self: center;
  }
  .about-photo {
    max-width: 25rem;
    max-height: 30rem;
    object-fit: cover;
    border-radius: var(--radius);
    border: 2px solid var(--clr-primary-2);
  }
  .about-title {
    margin-bottom: 2rem;
    text-align: left;
  }
  h2 {
    color: ${({theme}) => theme.titleAbout}
  }
  a{
    color: #CF6679;
  }

  .btn {
    background-color: ${({ theme }) => theme.bgherobtn};
      color: ${({ theme }) => theme.colorherobtn};
      :hover {
        background-color: ${({ theme }) => theme.bgherobtnhover};
      }
  }
`;
