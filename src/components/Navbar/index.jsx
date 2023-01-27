import React from 'react';
import Link from 'next/link';
import { Nav } from './styles';
import { BsCamera2 } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';
import { IoMdPhotos } from 'react-icons/io';
import { FaInfo } from 'react-icons/fa';

const Navbar = () => {
    return ( 
        <Nav>
             <Link href="/"><BsCamera2 size={48} className="icon" /></Link>
            <ul>
                <li>
                    <Link href="/"> 
                        <AiFillHome size={32} className="NavIcon" /> 
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link href="/portfolio"> 
                        <IoMdPhotos size={32} className="NavIcon" /> 
                        <span>Portfolio</span>
                    </Link>
                </li>
                <li>
                    <Link href="/sobre"> 
                        <FaInfo size={32} className="NavIcon" /> 
                        <span>Sobre</span>
                    </Link>
                </li>
            </ul>
        </Nav>
     );
}
 
export default Navbar;