import styled, { css } from "styled-components";

export const Calculator = styled.form`
  text-align: center;
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.color.dark};
  border-radius: 10px;
`;

export const Fieldset = styled.fieldset`
  border: 2px solid ${({ theme }) => theme.color.dark};
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

  ${({info}) => info && css`
  font-size: 12px;
  `}
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 0;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.color.dark};
  border-radius: 5px;
  letter-spacing: 1px;

  ${({ error }) =>
    error &&
    css`
      color: ${({ theme }) => theme.color.chiliPepper};
    `}

  ${({ special }) =>
    special &&
    css`
      padding: 20px;
      font-size: 24px;
      border-radius: 15px;
      font-weight: bold;
      background-color: ${({ theme }) => theme.color.midGreen};

      &:hover {
        transform: scale(1.05);
      }
    `}
`;
