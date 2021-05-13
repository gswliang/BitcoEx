import styled from "styled-components";

export const Button = styled.div`
  margin-top: 2rem;
  width: 55%;
  height: 35px;
  background: #309ad5;
  color: white;
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 300;
  justify-content: center;
  margin-bottom: 2rem;
  border-radius: 0.4rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background: #fff;
    color: #309ad5;
    transition: all 0.5s ease-in-out;
    border: 1px solid #309ad5;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 3rem;
    width: 70%;
    height: 3rem;
  }
`;
