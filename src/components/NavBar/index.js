import React from 'react';
import {FaBars} from 'react-icons/fa';
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink,
    NavBtnLinkUp
} from './NavbarElements';

const Navbar = ({ toggle }) => {
    return (
        <>
        <Nav> 
            <NavbarContainer>
                <NavLogo to='/'>resource edge</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="features">Features</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="about">About</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLinkUp to="signup">Sign up</NavBtnLinkUp>
                </NavBtn>
                <NavBtn>
                    <NavBtnLink to="signin">Sign in</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </>
    );
};

export default Navbar;
