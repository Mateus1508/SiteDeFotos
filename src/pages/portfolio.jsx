import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/Navbar';
import Header from '../components/Head';
import { Container, CardImage, CardContainer } from '../Styles/portfolio';
import Footer from '@/components/Footer';

const Portfolio = () => {
    useEffect(() => {
        AOS.init({duration: 2000});
    },[]);
    return ( 
        <Container>
            <Header />
            <Navbar />
            <CardContainer data-aos="zoom-in">
                <CardImage data-aos="fade-left">
                    <img src="assets/foto1.jpg" alt="" />
                    <article>
                        <h2>Lorem ipsum dolor sit.</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam eveniet quibusdam vero delectus adipisci inventore? Perferendis officiis magnam necessitatibus unde ullam recusandae nulla, ipsum delectus totam animi expedita nostrum iusto.</p>
                    </article>
                </CardImage>
                <CardImage data-aos="fade-right">
                    <article>
                        <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sint asperiores blanditiis voluptate, quaerat ex natus similique culpa, consequuntur nisi quasi quam omnis quidem maxime?</p>
                    </article>
                    <img src="assets/foto2.jpg" alt="" />
                </CardImage>
                <CardImage data-aos="fade-left">
                    <img src="assets/foto3.jpg" alt="" />
                    <article>
                        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsam maxime iste.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem eius perspiciatis, culpa minima eum id, debitis, tenetur maiores dignissimos accusantium quia illo.</p>
                    </article>
                </CardImage>
                <CardImage data-aos="fade-right">
                    <article>
                        <h2>Lorem, ipsum dolor.</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quasi numquam sapiente repellat a debitis aliquam porro, vitae nam praesentium recusandae?</p>
                    </article>
                    <img src="assets/foto4.jpg" alt="" />
                </CardImage>
            </CardContainer>
            <Footer />
        </Container>
    );
}
 
export default Portfolio;