import React from 'react';
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
}
from './ServicesElements';

import Icon1 from '../../images/svg1.svg';
import Icon2 from '../../images/svg4.svg';
import Icon3 from '../../images/svg3.svg';

const Services = () => {
    return (
        <>
            <ServicesContainer id="services ">
                <ServicesH1>Nuestros servicios</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1}></ServicesIcon>
                        <ServicesH2>Compra en el extranjero</ServicesH2>
                        <ServicesP>Te ayudamos a realizar compras en el exterior de forma sencilla</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2}></ServicesIcon>
                        <ServicesH2>Soporte online las 24Hrs.</ServicesH2>
                        <ServicesP>Ante cualquier problema contacta al servicio de ayuda y te atenderemos en brevedad.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3}></ServicesIcon>
                        <ServicesH2>Beneficios Premiun</ServicesH2>
                        <ServicesP>Se cliente premiun y obten todos los beneficios de nuestra compañia.</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services;
