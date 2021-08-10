import styled from 'styled-components';

export const SigninContainer = styled.div` 
    background : #fff;
    display : grid;
    height : 100vh;
    justify-content : center;
    grid-auto-columns : minmax(auto,1fr);
    grid-template-areas : 'col1 col2';

    @media screen and (max-width : 768px){
        grid-template-areas : 
        'col1 col1'
        'col2 col2';
    }

`

export const SigninFormContainer = styled.div` 
    grid-area : col1;
    display : grid;
    justify-content : center;
    align-items : center;
    
    @media screen and (max-width : 768px){
        height : 100vh;
    }

`

export const Form = styled.form` 
    justify-content : center;
    margin : 0 auto;
    height : auto;
    display : grid;
    max-width :450px;
`

export const FormLabels = styled.label` 
    color: #010606;
    font-size : 14px;
    margin : 5px 0;
`

export const FormInputs = styled.input`
    padding : 13px 25px;
    border : 1px solid #666666;
    border-radius : 50px;
    margin : 10px 0;
    outline : none;

`

export const FormTitle = styled.h1` 
    margin-bottom : 25px;
`

export const SigninInfo = styled.div` 
    background : #010606;
    width: 100%;
    height: 100%;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-area : col2;


    @media screen and (max-width : 768px){
        display: none;

    }
`

export const InfoWrapper = styled.div` 
    margin-bottom : 15px;
    padding : 0 30px;

`

export const Img = styled.img ` 

`

export const SignInfoH1 = styled.h1` 
    margin-bottom : 24px;
    font-size:  40px;
    line-height: 1.1;
    max-width : 600px;
    font-weight: 600;
    color : #fff;
`

export const SigninInfoP = styled.p` 
    max-width : 440px;
    margin : 0 0 25px 0;
    font-size : 18px;
    line-height: 23px;
    color: #fff;
`
export const SignTitle = styled.p` 
    color : #01bf71;
    font-weight: 600;
    margin-bottom : 16px;
    text-transform: uppercase;
    
`

export const Button = styled.button` 
    border-radius : 50px;
    background : ${({primary}) => (primary ? '#01bf71' : '#010606')};
    white-space : none;
    padding : ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color : ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size : ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline : none;
    border : none;
    cursor : pointer;
    display : flex;
    justify-content : center;
    align-items : center;
    transition : all .2s ease-in-out;

    &:hover {    
        transition : all .2s ease-in-out;
        background : ${({primary}) => (primary ? '#fff' : '#01bf71')};
        color : ${({dark}) => (dark ? '#fff' : 'black')};

    }
`

