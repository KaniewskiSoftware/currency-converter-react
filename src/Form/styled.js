import styled, { css } from "styled-components";

export const Calculator = styled.form`
  text-align: center;
  padding: 10px;
  border: 2px solid #212529;
  border-radius: 10px;
`;

export const Fieldset = styled.fieldset`
  border: 2px solid #212529;
  border-radius: 10px;
`;

export const Legend = styled.legend`
  display: inline-block;
  text-align: center;
  padding: 0 10px;
  font-size: 24px;
`;

export const Span = styled.span`
  display: inline-block;
  padding: 0 0 10px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 5px 0;
  text-align: center;
  border: 1px solid #212529;
  border-radius: 5px;
  letter-spacing: 1px;

  ${({ special }) =>
    special &&
    css`
      padding: 20px;
      font-size: 24px;
      border-radius: 15px;
      font-weight: bold;
      background-color: rgb(50, 161, 65);

      &:hover {
        transform: scale(1.05);
      }
    `}
`;
