import styled from "styled-components";

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-end;
    justify-content: center;
    height: 93vh;
    background: url("/assets/background.jpg") no-repeat center;
    padding: 0 60px 0 0;
    background-size: cover;
    opacity: 0.8;
    color: #ffffff;
    letter-spacing: 2px;
    h1 {
        font-size: 64px
    }
    h2 {
        font-size: 24px;
    }
`;