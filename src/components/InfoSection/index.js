import React from 'react';
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Colum1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    Colum2,
    ImgWrap,
    Img
} from './InfoSectionElements';
import {Button} from '../ButtonElement';

const InfoSection = ({
    lightbg,
    id,
    imgStart,
    topLine,
    headline,
    lightText,
    darkText,
    description,
    buttonLabel,
    img,
    alt,
    primary
}) => {
    return (
        <>
            <InfoContainer LightBg={lightbg} id={id}>
                <InfoWrapper>
                    <InfoRow ImgStart={imgStart}>
                        <Colum1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading LigthText={lightText}>{headline}</Heading>
                                <Subtitle DarkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to='Home'
                                    smooth={true}
                                    spy={true}
                                    duration={500}
                                    exact={true}
                                    offset={-80 }
                                    primary={primary}
                                    dark={false}>{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Colum1>
                        <Colum2>
                            <ImgWrap>
                                <Img src={img} alt={alt} /> 
                            </ImgWrap>
                        </Colum2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection;
