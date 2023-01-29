import styled from "styled-components";

export const WrapperProyects = styled.section`
  padding: 4rem 0rem;
  position: relative;
  scroll-padding-bottom: 5rem;
  background-color: ${({ theme }) => theme.bgportfoloio};
  .title-portfolio {
    text-align: center;
    margin-bottom: 5rem;
    h2 {
      color: ${({ theme }) => theme.titleportfolio};
    }
  }
  .udl {
    margin: 0 auto;
  }
  .intro-proyect {
    max-width: 50%;
    margin: 2rem auto;
  }
  .buttons {
    width: 80%;
    margin: 0 auto;
    margin-bottom: 5rem;
  }
  .claseb,
  .btn-proy {
    border: none;
    margin: 0 1rem;
    padding: 0.5rem;
    border-radius: var(--radius);
    background-color: ${({ theme }) => theme.bgbtnproyects};
    color: ${({ theme }) => theme.colorbntproyects};
    transition: var(--transition);
    text-transform: capitalize;
    box-shadow: 0 1px 3px rgb(0 0 0 / 20%);
    font-size: 1rem;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.colorbntproyects};
      border: 1px solid var(--clr-primary-5);
      color: var(--clr-grey-6);
    }
  }
  .claseb {
    background-color: ${({ theme }) => theme.activebtnprotects};
    color: var(--clr-primary-4);
    margin-bottom: 1rem;
    @media screen and (max-width: 306px) {
      margin: 1rem;
    }
  }
`;

export const WrapperCenter = styled.div`
  width: 80vw;
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  column-gap: 2rem;
  grid-template-columns: 1fr;
  /* grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));*/
  @media screen and (min-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }
  .card {
    margin-bottom: 2rem;
    background-color: ${({ theme }) => theme.bgcardproyects};
    padding: 0.9rem;
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.2);
    border-radius: var(--radius);
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
  .card-logo {
    background-color: ${({ theme }) => theme.bgcardproyects};
  }
  .img-logo {
    width: 5rem;
    height: 5rem;
    margin: 0 auto;
  }
  .card-info {
    text-align: center;
    h3 {
      margin-top: 1rem;
      font-size: 1rem;
      color: var(--clr-primary-5);
    }
    p {
      color: ${({ theme }) => theme.texttimeline};
    }
  }
  img {
    border-radius: var(--radius);
  }
`;

export const ButtonProyect = styled.button`
  padding: 0.3rem;
  border: none;
  border-radius: var(--radius);
  background-color: ${({ theme }) => theme.btngitproyect};
  color: ${({ theme }) => theme.btncolorgitproyect};
  transition: var(--transition);
  letter-spacing: 0.2rem;
  box-shadow: 0 1px 3px rgb(0 0 0 / 20%);
  cursor: pointer;
  :hover {
    background-color: var(--clr-primary-4);
  }
`;
