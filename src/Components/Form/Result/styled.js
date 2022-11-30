import styled from "styled-components";

export const Section = styled.section`
  margin-top: 10px;
  width: 100%;
  background-color: ${({theme}) => theme.color.osloGrey};
  text-align: center;
  border: 2px solid ${({theme}) => theme.color.dark};
  border-radius: 10px;
  letter-spacing: 1px;
`;

export const Span = styled.span`
  display: inline-block;
  padding: 0 0 10px;
`;
