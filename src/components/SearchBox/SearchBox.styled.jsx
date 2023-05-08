import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  height: 30px;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 18px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  padding-bottom: 4px;

  &::placeholder {
    font: inherit;
    font-size: 16px;
  }
`;

export const Button = styled.button`
  display: inline-block;

  width: 48px;
  height: 48px;
  border: 0;

  opacity: 0.6;
  //   transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  color: #000;

  &:hover {
    opacity: 1;
  }
`;
