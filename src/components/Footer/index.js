import React from 'react';
import { 
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinksTitle,
    FooterLink}
from './FooterElements'


const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinksItems>
                                <FooterLinksTitle>Sobre nosotros</FooterLinksTitle>
                                    <FooterLink to='/signin'>Informacion</FooterLink>
                                    <FooterLink to='/signin'>Nuestro motivo</FooterLink>
                                    <FooterLink to='/signin'>Trabaja con nosotros</FooterLink>
                            </FooterLinksItems>
                            <FooterLinksItems>
                                <FooterLinksTitle>Preguntas frecuentes</FooterLinksTitle>
                                    <FooterLink to='/signin'>Recuperar contraseña</FooterLink>
                                    <FooterLink to='/signin'>Tiene mantencion</FooterLink>
                                    <FooterLink to='/signin'>Prestamos</FooterLink>
                                    <FooterLink to='/signin'>Estafas</FooterLink>
                            </FooterLinksItems>
                            <FooterLinksItems>
                                <FooterLinksTitle>Redes sociales</FooterLinksTitle>
                                    <FooterLink to='/signin'>Facebook</FooterLink>
                                    <FooterLink to='/signin'>Instagram</FooterLink>
                                    <FooterLink to='/signin'>Linkdin</FooterLink>
                                    <FooterLink to='/signin'>Tik-Tok</FooterLink>
                            </FooterLinksItems>
                            <FooterLinksItems>
                                <FooterLinksTitle>Contactenos</FooterLinksTitle>
                                    <FooterLink to='/signin'>Correos</FooterLink>
                                    <FooterLink to='/signin'>Numeros</FooterLink>
                                    <FooterLink to='/signin'>Direcciones</FooterLink>
                                    <FooterLink to='/signin'>Asistente virtual</FooterLink>
                            </FooterLinksItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default Footer
