import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;   
        font-family: 'Anton', sans-serif;
    }
    body {
        overflow-x: hidden;
    }
    h1, h2 {
        font-family: 'Quicksand', sans-serif;
    }
`;