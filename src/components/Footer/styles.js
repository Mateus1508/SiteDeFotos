import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    padding: 5px;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 5px;
    background: #0072b1;
    span {
        color: #ffffff;
        margin: 20px 0;
        cursor: no-drop;
    }
    div {
        display: flex;
        flex-direction: row;
        gap: 80px;
        margin: 0 0 40px 0;
        a {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 5px 10px;
            font-size: 24px;
            cursor: pointer;
            border-radius: 5px;
            color: #000000;
            transition: 0.3s ease-in-out;
            span {
                display: none;
                position: absolute;
                font-size: 14px;
                color: #ffffff;
            }
            .NavIcon {
                display: block;
                color: #ffffff;
            }   
            &:hover {
                transform: scale(1.1);
                .linkedin {
                    color: #0072b1;
                    background: #ffffff;
                    padding: 2px;
                    border-radius: 5px;
                }
                .instagram {
                    border-radius: 5px;
                    color: #ffffff;
                    background-image: linear-gradient(
                        45deg,
                        #f09433 0%,
                        #e6683c 25%,
                        #dc2743 50%,
                        #cc2366 75%,
                        #bc1888 100%
                        );
                        background-size: 100%;
                        -webkit-text-fill-color: transparent; 
                        -moz-text-fill-color: transparent;
                }
                .github {
                    color: #000000;
                }
                span {
                    display: block;
                    transform: translateY(25px);
                }
            }
        }
    }
`;