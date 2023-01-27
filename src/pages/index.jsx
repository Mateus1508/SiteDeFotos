import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/Navbar';
import Header from '../components/Head';
import { MainContent } from '../Styles/home';
import Footer from '../components/Footer';

const Home = () => {
  useEffect(() => {
    AOS.init({duration: 2000});
  },[]);
  return (
    <>
      <Header />
      <Navbar />
      <MainContent>
        <h1>Mateus Belmonte</h1>
        <h2>A importância de eternizar um momento.</h2>
      </MainContent>
      <Footer />
    </>
  )
}

export default Home;
