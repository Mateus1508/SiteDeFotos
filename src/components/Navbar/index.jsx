import React from 'react';
import { Nav } from './styles';
import { BsCamera2 } from 'react-icons/bs';
const Navbar = () => {
    return ( 
        <Nav>
            <BsCamera2 size={48} className="icon" />
            <ul>
                <li>Home</li>
                <li>Portfólio</li>
                <li>Sobre</li>
            </ul>
        </Nav>
     );
}
 
export default Navbar;