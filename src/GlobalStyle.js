import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;   
        font-family: 'Antonio', sans-serif;
    }
    body {
        overflow-x: hidden;
    }
    h1, h2 {
        font-family: 'Quicksand', sans-serif;
    }
    a {
        text-decoration: none;
    }
    ::-webkit-scrollbar-track {
        background-color: #eee;
    }
    ::-webkit-scrollbar {
        width: 5px;
        background: #fff;
    }
    ::-webkit-scrollbar-thumb {
        background: #219ebc;
    }
`;