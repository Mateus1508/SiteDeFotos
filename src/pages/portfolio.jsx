import Navbar from '../components/Navbar';
import Header from '../components/Head';
import React from 'react';
import { Container, CardImage, CardContainer } from '../Styles/portfolio';

const Portfolio = () => {
    return ( 
        <Container>
            <Header />
            <Navbar />
            <CardContainer>
                <CardImage>
                    <img src="assets/foto1.jpg" alt="" />
                </CardImage>
                <CardImage>
                    <img src="assets/foto2.jpg" alt="" />
                </CardImage>
                <CardImage>
                    <img src="assets/foto3.jpg" alt="" />
                </CardImage>
                <CardImage>
                    <img src="assets/foto4.jpg" alt="" />
                </CardImage>
            </CardContainer>
        </Container>
    );
}
 
export default Portfolio;