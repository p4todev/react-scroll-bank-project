import React from 'react'
import 
{
SidebarContainer
,Icon
,CloseIcon
,SidebarWrapper,
SidebarMenu,
SidebarLinks,
SideBtnWrap,
SidebarRoutes} 
from './SidebarElements'

const SideBar = ({isOpen,toggle})=> { 
    //TODO: terminar el sidebar!
    return(
        <SidebarContainer isOpen={isOpen} onClick={toggle}> 
            <Icon onClick={toggle  }>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLinks to='about' onClick={toggle}>
                        About
                    </SidebarLinks>
                    <SidebarLinks to='discover' onClick={toggle}>
                        Discover
                    </SidebarLinks>
                    <SidebarLinks to='services'onClick={toggle}>
                        Services
                    </SidebarLinks>
                    <SidebarLinks to='signup'onClick={toggle}>
                        Sign up    
                    </SidebarLinks>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoutes to='/signin'>Sign in</SidebarRoutes>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
}

export default SideBar;