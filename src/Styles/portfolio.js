import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
`;

export const CardContainer = styled.div`
    display: flex;
    padding: 10px 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: max-content;
`;

export const CardImage = styled.article`
    display: flex;
    width: 80vw;
    height: 60vh;
    margin: 5px 0;
    box-shadow: 0 0 5px #bbbbbb;
    img {
        width: 60%;
    }
    article {
        align-self: center;
        padding: 20px;
    }
    h2 {
        text-align: center;
        @media (max-width: 700px) {
            font-size: 16px;
        }
    }
    p {
        margin: 20px 0 0 0;
        text-align: justify;
        font-weight: 100;
        @media (max-width: 700px) {
            font-size: 12px;
            margin: 10px 0 0 0;
        }
    }
`;