import styled from "styled-components";

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-end;
    @media (max-width: 450px) {
        align-items: center;
    }
    justify-content: center;
    height: 93vh;
    background: url("/assets/background.jpg") no-repeat center;
    padding: 0 60px 0 0;
    background-size: cover;
    color: #ffffff;
    letter-spacing: 2px;
    h1 {
        margin: 5px;
        font-size: 64px;
        @media (max-width: 400px) {
            font-size: 32px;
        }
        font-family: 'Aboreto', cursive;
        animation: fade-up 1.5s 0.5s linear 1 normal both;
    }
    h2 {
        margin: 5px;
        font-size: 16px;
        @media (max-width: 400px) {
            font-size: 14px;
        }
        font-family: 'Aboreto', cursive;
        letter-spacing: 7px;
        color: #ffffff;
        animation: fade-right 1.5s 1.5s linear 1 normal both;
    }
    @keyframes fade-up {
        0% {
            opacity: 0;
            transform: translateY(-300px);
        }
        40% {
            opacity: 0.5;
            transform: translateY(10px);
        }

        70% {
            opacity: 0.9;
            transform: translateY(-10px);
        }

        80% {
            opacity: 1;
            transform: translateY(10px);
        }

        90% {
            opacity: 1;
            transform: translateY(-10px);
        }

        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fade-right {
        0% {
            opacity: 0;
            transform: translateX(300px);
        }
        40% {
            opacity: 0.5;
            transform: translateX(-10px);
        }

        70% {
            opacity: 0.9;
            transform: translateX(10px);
        }

        80% {
            opacity: 1;
            transform: translateX(-10px);
        }

        90% {
            opacity: 1;
            transform: translateX(10px);
        }

        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;