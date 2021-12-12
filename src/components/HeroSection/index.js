import React from 'react';
// import Image from '../../Images/relax.png';
import { HeroContainer, HeroBg,  HeroContent, HeroH1, HeroP } from './HeroElements';

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroContent>
                <HeroH1>Throw paperwork into the trash where it belongs.</HeroH1>
                <HeroP>Eliminate all the hassle involved in managing people operations by automating it.</HeroP>
            </HeroContent>
            <HeroBg>
                {/* <ImageBg  src={Image}  type="image/png" alt="relax" />  */}
                <img src={require('../../Images/relax.png').default} alt='' />
            </HeroBg>
        </HeroContainer>
    );
};

export default HeroSection;