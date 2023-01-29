import styled from "styled-components";

export const WrapperForm = styled.section`
  background-color: ${({ theme }) => theme.bgform};
  padding: 6rem 1rem;
  .form-title {
    text-align: center;
    h2 {
      color: ${({ theme }) => theme.titleform};
    }
  }
  .udl {
    margin: 0 auto;
  }
`;
export const FormCenter = styled.div`
  max-width: 1100px;
  width: 80vw;
  margin: 0 auto;
  display: grid;
  .form-img {
    justify-self: center;
  }
  .form-photo {
    max-width: 25rem;
    max-height: 30rem;
    object-fit: cover;
  }
  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    .form-img {
      margin-left: 0rem;
      justify-self: start;
    }
  }
`;

export const FormInfo = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-top: 2rem;
  .label-name,
  .input-name,
  .label-email,
  .input-email {
    margin-bottom: 1rem;
  }
  label {
    letter-spacing: 0.2rem;
    font-family: var(--ff-primary);
    color: ${({ theme }) => theme.labelform};
  }

  textarea,
  input {
    width: 100%;
    border: none;
    padding: 1rem;
    outline: none;
    background-color: ${({ theme }) => theme.inputs};
    color: ${({ theme }) => theme.colorinputs};
    ::placeholder {
      color: var(--clr-grey-6);
      font-size: 0.7rem;
      padding: 0.3rem;
    }
  }
  .btn {
    background-color: ${({ theme }) => theme.bgherobtn};
    color: ${({ theme }) => theme.colorherobtn};
    :hover {
      background-color: ${({ theme }) => theme.bgherobtnhover};
    }
  }
  .btn-form {
    margin-bottom: 0.5rem;
  }
`;
