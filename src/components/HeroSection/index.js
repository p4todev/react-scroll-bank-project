import React, {useState} from 'react'
import {Button} from '../ButtonElement'
import{
HeroContainer,
HeroBg,
HeroVideo,
HeroContent,
HeroH1,
HeroP,
HeroBtnWrapper,
ArrowForWard,
ArrowRight
} from './HeroSectionElements'
import Video from '../../videos/video.mp4'


const HeroSection = () => {

    const [hover, setHover] = useState(false); 

    const onHover = () => {
        setHover(!hover);
    }
    
    return (
        <HeroContainer id="home">
            <HeroBg> 
                <HeroVideo autoPlay loop muted src={Video} type="video/mp4"/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Banco Virtual</HeroH1>
                <HeroP>Crea tu cuenta y recibiras $250.000 para tus primeras compras.</HeroP>
                <HeroBtnWrapper>
                    <Button to='/signup' onMouseEnter={onHover} onMouseLeave={onHover}
                    primary={true}
                    dark={true}>
                        ingresa {hover ? <ArrowForWard /> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
