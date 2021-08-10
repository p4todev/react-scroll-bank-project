import React from 'react'
import {
    SigninContainer,
    SigninFormContainer,
    Form,
    FormLabels,
    FormInputs,
    SigninInfo,
    Img,
    SignInfoH1,
    SigninInfoP,
    InfoWrapper,
    SignTitle,
    Button,
    FormTitle
}
from './SigninElements';

const Signin = () => {

    const dataInfo = {
        title : 'MYBANK',
        primary : 'Descubre los beneficios de tener tu cuenta',
        description : 'Te invitamos a ser parte de nuestra familia y disfrutar de todos los beneficios que te otorga pertenecer a MyBank'
    }

    return (
        <SigninContainer ImgStart={true}>
            <SigninFormContainer>
                <Form>
                    <FormTitle>Inicia Sesion</FormTitle>
                    <FormLabels>Rut</FormLabels>
                    <FormInputs></FormInputs>
                    <FormLabels>Contrasena</FormLabels>
                    <FormInputs></FormInputs>
                    <Button primary={true}>Ingresar</Button>
                </Form>
            </SigninFormContainer>
            <SigninInfo>
                <InfoWrapper>
                    <Img />
                    <SignTitle>{dataInfo.title}</SignTitle>
                    <SignInfoH1>{dataInfo.primary}</SignInfoH1>
                    <SigninInfoP>{dataInfo.description}</SigninInfoP>
                   
                </InfoWrapper>
            </SigninInfo>
        </SigninContainer>
    )
}

export default Signin;
