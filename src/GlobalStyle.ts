import { createGlobalStyle } from "styled-components";
import background from "./background.jpg"

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    }

    *, ::after, ::before {
    box-sizing: inherit;
    }

    #root {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-image: url("${background}");
    background-size: cover;
    background-position: center;
    color: ${({theme}) => theme.color.dark};
    font-family: 'Raleway', sans-serif;
    line-height: 1.4;
    font-weight: bold;
    }
`;
