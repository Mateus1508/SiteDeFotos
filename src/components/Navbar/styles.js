import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    padding: 0 20px;
    width: 100vw;
    height: 7vh;
    position: static;
    top: 0;
    justify-content: space-between;
    align-items: center;
    background: #219ebc;
    ul {
        display: flex;
        gap: 40px;
        @media (max-width: 700px) {
            gap: 5px;
        }
    }
    li {
        text-align: center;
        list-style: none;
        width: 100px;
        @media (max-width: 395px) {
            width: max-content;
        }
        a {
            display: flex;
            justify-content: center;
            padding: 5px 10px;
            font-size: 24px;
            cursor: pointer;
            border-radius: 5px;
            color: #ffffff;
            transition: 0.5s ease-in-out;
            span {
                display: none;
            }
            .NavIcon {
                display: block;
                color: #ffffff;
            }
            &:hover {
                transform: scale(1.1);
                .NavIcon {
                    display: none;
                }
                span {
                    padding: 0 5px;
                    border-bottom: 5px solid #023047;
                    display: block;
                    transform: translateY(5px);
            }
            }
        }
        }
    .icon {
        display: block;
        transition: 0.3s ease-in-out;
        cursor: pointer;
        color: #ffffff;
        &:hover {
            animation: Shake 1.5s ease-in 2 normal forwards;
            transform: scale(1.1);
            color: #023047;
        }
    }

    @keyframes Shake {
        20%{
            transform: rotateZ(10deg);
            color: #ffffff;
        }
        50% {
            transform: rotateZ(-10deg);
            color: #000000;
        }
        80%{
            transform: rotateZ(10deg);
            color: #ffffff;
        }
        
    }

`;