import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {BiSpeaker} from 'react-icons/bi';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';
import { useSelector } from 'react-redux';
import { selectPages } from '../features/pageSections/pageSlice';
import YouTube from '@u-wave/react-youtube';
import ReactPlayer from 'react-player';

const Header = () => {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const [musicStatus, setMusicStatus] = useState(false);
    const [locShown, setLocShown] = useState(false);
    const [aboutShown, setAboutShown] = useState(false);
    const [contactShown, setContactShown] = useState(false);
    const [specialShown, setSpecialShown] = useState(false);

    const burgerClick = () => setBurgerStatus(!burgerStatus);
    const speakerClick = () => setMusicStatus(!musicStatus);   

    return (

        <Container>
            <Logo>
                <button class='buttonl buttonh'>
                    Wonderland
                </button>
            </Logo>           
            <Menu>
                <button class='button buttonh'>
                    Locations
                </button>
                <button class='button buttonh'>
                    About Us
                </button>
                <button class='button buttonh'>
                    Contact Us
                </button>
                <button class='button buttonh'>
                    Special Events
                </button>
            </Menu>


            <RightOptions>
                
                <MusicToggle onClick={speakerClick}>    
                </MusicToggle>                                
                        
                <CustomMenu onClick={() => setBurgerStatus(true)}/>
            </RightOptions>
            {musicStatus ? <ReactAudioPlayer src='HeavenlyFeelings.wav' autoPlay loop/> : null}
            <BurgerMenu show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)}/>
                </CloseWrapper>
                <button class='button buttonh' onMouseEnter={() => setLocShown(true)} onMouseLeave={() => setLocShown(false)}>
                    Locations
                </button>
                <button class='button buttonh' onMouseEnter={() => setAboutShown(true)} onMouseLeave={() => setAboutShown(false)}>
                    About Us
                </button>
                <button class='button buttonh' onMouseEnter={() => setContactShown(true)} onMouseLeave={() => setContactShown(false)}>
                    Contact Us
                </button>
                <button class='button buttonh' onMouseEnter={() => setSpecialShown(true)} onMouseLeave={() => setSpecialShown(false)}>
                    Special Events
                </button>
                {locShown && (
                    <>
                    <img src='pexels-photo-699466.jpeg'/>
                    </>
                )}
                {aboutShown && (
                    <img src='pexels-photo-9812128.jpeg'/>
                )}
                {contactShown && (
                    <img src='pexels-photo-9996108.jpeg'/>
                )}
                {specialShown && (
                    <img src='pexels-photo-1837590.jpeg'/>
                )}
                
            </BurgerMenu>


        </Container>
    );
}

export default Header;

const Container = styled.div`
    background-color: transparent;
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    
    .buttonl{
        font-size: 35px;
        font-family: Garamond;
        //color: #e6e6e6;
        padding: 15px 32px;
        border: none;
        text-align: center;
        //background: transparent;
        border-radius: 12px;
        transition-duration: 0.4s;
        cursor: pointer;

        background: linear-gradient(to right, #a9a9a9, #d1d1d1, #a9a9a9);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
    }
    .buttonh:hover{
        //background-image: rgb(39, 39, 39);
        background: linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        transform: scale(1.1);
    }
`
const Logo = styled.div`
    
    
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;
    button{
        background-color: transparent;
        font-family: Garamond;
        font-size: 18px;
        color: white;
        text-transform: uppercase;
        padding: 20px 10px;
        cursor: pointer;
        flex-wrap: nowrap;
        border: none;
    }
    .buttonh:hover{
        //background-image: rgb(39, 39, 39);
        background: linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        transform: scale(1.1);
    }    
    @media(max-width: 850px){
        display: none;
    }
    
    
`

const RightOptions = styled.div`
    display: flex;
    align-items: center;
    button{
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }
    color: #c0c0c0;
`
const BurgerMenu = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: #434343;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    color: #c0c0c0;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s ease-in;
    button{
        background-color: #545454;
        padding: 20px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);
        color: #c0c0c0;
        font-family: Galamond;
        font-size: 20px;
        text-transform: uppercase;
        flex-wrap: nowrap;
        border: none;
    }
    
`
const MusicToggle = styled(BiSpeaker)`
    cursor: pointer;
    flex-wrap: nowrap;
    width: 20px;
    height: 20px;
    .icon:hover{
        //background-image: rgb(39, 39, 39);
        background: linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        transform: scale(1.1);
    } 
`
const MusicToggleO = styled(MusicToggle)`
    color: red;
`

const CustomMenu = styled(FiMenu)`
    cursor: pointer;
    width: 20px;
    height: 20px;
    .buttonh:hover{
        //background-image: rgb(39, 39, 39);
        background: linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        transform: scale(1.1);
    } 
`

const CustomClose = styled(MdClose)`
    cursor: pointer;
    width: 20px;
    height: 20px;
    .buttonh:hover{
        //background-image: rgb(39, 39, 39);
        background: linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        transform: scale(1.1);
    } 
    
`
const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`
const Music = styled.div`

`