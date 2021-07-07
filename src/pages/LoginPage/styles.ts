import styled from "styled-components";
import imageLogin from "../../asssets/images/image-login.png";

export const ContainerLogin = styled.div`
  margin-top: -77px;
  min-height: 100vh;
  display: flex;
  #description {
    display: none;
  }
  @media only screen and (min-width: 768px) {
    #description {
      display: block;
    }
  }
`;

export const ContainerLoginForm = styled.div`
  flex: 8;
  align-self: center;
`;

export const ContainerDescription = styled.div`
  flex: 7;
  background-image: url(${imageLogin});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  div {
    text-align: right;
    width: 400px;
    padding: 0 20px;
    margin: 110px 66px auto auto;

    h2 {
      font-family: Oswald;
      font-size: 2rem;
      color: var(--green);
      font-style: normal;
      font-weight: 700;
      line-height: 42px;
    }
    p {
      margin-top: 13px;
      font-family: Lato;
      font-size: 1rem;
    }
  }
`;