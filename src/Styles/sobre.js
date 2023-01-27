import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    padding: 40px 100px;
    @media (max-width: 900px) {
        padding: 20px;
    }
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    text-align: justify;
    h1 {
        font-size: 48px;
    }
    p {
        text-align: justify;
    }
`;