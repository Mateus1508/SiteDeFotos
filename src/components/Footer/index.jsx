import React from 'react';
import Link from 'next/link';
import { Container } from './styles';
import { VscGithub } from 'react-icons/vsc';
import { GrInstagram } from 'react-icons/gr';
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return ( 
        <Container>
            <span>Developed by - Mateus Belmonte</span>
            <div>
                <Link href="https://github.com/Mateus1508" rel="noreferrer nopeener" target="_blank">
                    <VscGithub className='NavIcon github' />
                    <span>GitHub</span>
                </Link>
                <Link href="https://www.instagram.com/mateus_bmt" rel="noreferrer nopeener" target="_blank">
                    <GrInstagram className='NavIcon instagram' />
                    <span>Instagram</span>
                </Link>
                <Link href="https://www.linkedin.com/in/mateus-belmonte-64b6b11a3/" rel="noreferrer nopeener" target="_blank">
                    <FaLinkedinIn className='NavIcon linkedin' />
                    <span>LinkedIn</span>
                </Link>
            </div>
        </Container>
     );
}
 
export default Footer;