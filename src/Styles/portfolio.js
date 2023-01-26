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
    border: 1px solid #000;
    &:nth-child(3) {
        justify-content: right;
    }
    &:nth-child(5) {
        justify-content: right;
    }
    img {
        width: 60%;
    }
`;