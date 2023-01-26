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
    background: #e9edc9;
    ul {
        display: flex;
        gap: 40px;
        padding: 0 20px;
    }
    li {
        text-align: center;
        list-style: none;
        font-size: 24px;
        width: 100px;
        cursor: pointer;
        border-radius: 5px;
        transition: 0.3s ease-in-out;
        &:hover {
            background: #219ebc;
            color: #ffffff;
            transform: scale(1.1);
        }
    }
    .icon {
        transition: 0.3s ease-in-out;
        cursor: pointer;
        &:hover {
            animation: Shake 1.5s ease-in infinite normal forwards;
            transform: scale(1.1);
            color: #219ebc;
        }
    }

    @keyframes Shake {
        20%{
            transform: rotateZ(10deg)
        }
        50% {
            transform: rotateZ(-10deg)
        }
        80%{
            transform: rotateZ(10deg)
        }
        
    }

`;