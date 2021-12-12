 import styled from "styled-components";
 import { Link as LinkR } from "react-router-dom";
 import { Link as LinkS } from "react-scroll";


 export const Nav = styled.nav`
   background : #fff;
   height: 72px;
   top: 0;
   /* z-index: 0; */
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 1rem;
   position: relative;

   @media screen and (max-width: 960px){
       transition: 0.8s all ease;
   }
 `;


 export const NavbarContainer = styled.div`
   display: flex;
   justify-content: space-around;
   height: 72px;
   /* z-index: 1; */
   width:80%;
   padding: 0;
   max-width: 1440px;
 `;

 export const NavLogo = styled(LinkR)`
 color: #0052CC;
 justify-self: flex-start;
 cursor: pointer;
 font-size: 1rem;
 display: flex;
 align-items: center;
 margin-left: 24px;
 font-weight: bold;
 text-decoration: none;
 `;

 export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #1A1A1A;;
  }
 `;

 export const NavMenu = styled.ul`
 display: flex;
 align-items: center;
 list-style: none;
 text-align: center;
 /* margin-right: -22px; */
 

 @media screen and (max-width: 768px){
   display: none;
 }
 `;

 export const NavItem = styled.li`
 height: 80px;
 `;

 export const NavLinks = styled(LinkS)`
 color:#091E42;
 display: flex;
 align-items: center;
 text-decoration: none;
 padding: 0 1rem;
 height: 100%;
 cursor: pointer;
 

 &:active{
   border-bottom: 3px solid #01bf71;
  }
 `;

 export const NavBtn = styled.nav`
 display: flex;
 /* flex-wrap: row-wrap; */
 /* row-gap: 5px; */
 text-align: end;
 justify-content: flex-end;
 align-items: center;
 font-size: 1rem;
 /* margin: auto 20px; */
 /* border: 2px solid red; */


 @media screen and (max-width: 768px){
   display: none;
 }
 `;

export const NavBtnLinkUp = styled(LinkR)`
background: #fff;
border-radius: 4px;
display: flex;
margin: 10px;
 color: #000;
 cursor: pointer;
 transition: all 0.2s ease-in-out;
 text-decoration: none;

`;

 export const NavBtnLink = styled(LinkR)`
 border-radius: 4px;
 background: #0052CC;
 white-space: nowrap;
 padding: 10px 12px;
 color: #fff;
 outline: none;
 border: none;
 cursor: pointer;
 transition: all 0.2s ease-in-out;
 text-decoration: none;
 

 &:hover{
   transition: all 0.2s ease-in-out;
   background: #0052CC;
   color: #010606;
 }
 `;

