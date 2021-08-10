import styled from "styled-components";

export const ServicesContainer = styled.div`
    height : 800px;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    background : #fff;

    @media screen and (max-width: 768px){
        height : 1100px;
    }

    @media screen and (max-width: 480px){
        height : 1300px; 
    }
`

export const ServicesH1 = styled.h1`
    color : #010606;
    font-size : 2.5rem;
    margin-bottom : 65px;

    @media screen and (max-width: 480px){
        font-size : 2rem;
    }
`

export const ServicesH2 = styled.h2` 
    font-size : 1rem;
    margin-bottom : 10px;
`

export const ServicesP = styled.p` 
    font-size : 1rem;
    align-items : center;
`

export const ServicesWrapper = styled.div` 
    max-width : 1000px;
    margin : 0 auto;
    display : grid;
    grid-template-columns : 1fr 1fr 1fr;
    align-items : center;
    grid-gap : 16px;
    padding : 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns : 1fr 1fr;
    }
    @media screen and (max-width: 768px){
        grid-template-columns : 1fr;
        padding : 0 20px;
    }

`

export const ServicesCard = styled.div` 
    background : rgb(231, 231, 231);
    display : flex;
    flex-direction : column;
    align-items : center;
    border : 1.5px solid rgb(204, 204, 204);
    border-radius : 10px;
    max-height : 340px;
    padding : 30px;
    box-shadow : 0px 10px 10px -6px rgb(179, 178, 178);
    transition : all .2s ease-in-out;

    &:hover{
        transform : scale(1.02);
        cursor : pointer;
        transition : all .2 ease-in-out;
    }

`

export const ServicesIcon = styled.img` 
     height : 160px;
     width : 160px;
     margin-bottom : 10px;
`

