import styled from "styled-components";

export const Main = styled.main`
  flex-basis: 900px;
  margin: 20px;
  padding: 20px;
  background-color: ${({theme}) => theme.color.osloGrey};
  letter-spacing: 1px;
  border: 2px solid ${({theme}) => theme.color.dark};
  border-radius: 10px;
`;
