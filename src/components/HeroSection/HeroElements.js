import styled from "styled-components";


export const HeroContainer = styled.div`
background: #fff;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 400px;
width: 100%;


@media screen and (max-width: 480px){
    display: flex;
    flex-direction: column;
}
`;

export const HeroBg = styled.div`
display: flex;
width : 100%;
height: 100%;
overflow: hidden;
flex-wrap: wrap;
justify-content: center;

@media screen and (max-width: 480px){
    display: flex;
    flex-direction: column;
}
`;

export const img = styled.image`
padding-right: 0;
border: 0;
max-width: 100%;
display: flex;
max-height: 100%;
justify content: flex-end;
object-fit: cover;
/* margin: auto; */
/* border: 2px solid red; */

@media screen and (max-width: 480px){
    display: flex;
    flex-direction: column;
}
`;

export const HeroContent = styled.div`
padding: 8px;
display: flex;
flex-direction: column;
align-items: center;

@media screen and (max-width: 480px){
    display: flex;
    flex-direction: column;
}
`;

export const HeroH1 = styled.h1`
color: #000;
font-size: 48px;
text-align: center;
padding:5px;

@media screen and (max-width: 768px){
    font-size: 40px;
}

@media screen and (max-width: 480px){
    font-size: 32px;
    display: flex;
    flex-direction: column;
}
`;

export const HeroP = styled.p`
margin-top: 24px;
color: #000;
font-size: 24px;
text-align: center;
/* max-width: 600px; */


@media screen and (max-width: 768px){
    font-size: 24px;
}

@media screen and (max-width: 480px){
    font-size: 18px;
    display: flex;
    flex-direction: column;
}
`;
