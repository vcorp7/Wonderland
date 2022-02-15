import React, { useState } from 'react';
import styled from 'styled-components';
import {BiSpeaker} from 'react-icons/bi';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';
//import { NavLink } from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';
// import { useSelector } from 'react-redux';
// import { selectPages } from '../features/pageSections/pageSlice';
// import YouTube from '@u-wave/react-youtube';
// import ReactPlayer from 'react-player';

const Header = () => {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const [musicStatus, setMusicStatus] = useState(false);
    const [locShown, setLocShown] = useState(false);
    const [aboutShown, setAboutShown] = useState(false);
    const [contactShown, setContactShown] = useState(false);
    const [specialShown, setSpecialShown] = useState(false);

    //const burgerClick = () => setBurgerStatus(!burgerStatus);
    const speakerClick = () => setMusicStatus(!musicStatus);   

    return (

        <Container>
            <Logo>
                <Link to={'/'}>
                   <button class='buttonl buttonh'>
                    Wonderland
                    </button> 
                </Link>
                
            </Logo>           
            <Menu>
                <Link to={'/Locations'}>
                    <button class='button buttonh'>
                        Locations
                    </button> 
                </Link>

                <Link to='/Aboutus'>
                  <button class='button buttonh'> About Us </button>  
                </Link>
                <Link to={'/Contactus'}>
                    <button class='button buttonh'>
                        Contact Us
                    </button>
                </Link>
                <Link to={'/Specialevents'}>
                    <button class='button buttonh'>
                        Special Events
                    </button>   
                </Link>
                
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
                <BurgerLinkWrapper>
                <Link to={'/Locations'}>
                <button class='button buttonh' onMouseEnter={() => setLocShown(true)} onMouseLeave={() => setLocShown(false)}>
                    Locations
                </button>
                </Link>
                <Link to='/Aboutus'>
                <button class='button buttonh' onMouseEnter={() => setAboutShown(true)} onMouseLeave={() => setAboutShown(false)}>
                    About Us
                </button>    
                </Link>
                <Link to={'/Contactus'}>
                <button class='button buttonh' onMouseEnter={() => setContactShown(true)} onMouseLeave={() => setContactShown(false)}>
                    Contact Us
                </button>    
                </Link>
               
                <Link to={'/Specialevents'}>
                <button class='button buttonh' onMouseEnter={() => setSpecialShown(true)} onMouseLeave={() => setSpecialShown(false)}>
                    Special Events
                </button>    
                </Link>    
                </BurgerLinkWrapper>
                
     
                
                
                {locShown && (
                    <>
                    <img src='pexels-photo-699466.jpeg' alt='img1'/>
                    </>
                )}
                {aboutShown && (
                    <img src='pexels-photo-9812128.jpeg' alt='img2'/>
                )}
                {contactShown && (
                    <img src='pexels-photo-9996108.jpeg' alt='img3'/>
                )}
                {specialShown && (
                    <img src='pexels-photo-1837590.jpeg' alt='img4'/>
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
        //text-shadow: -1px -1px 0.01px #000000;
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
        //color: white;
        text-transform: uppercase;
        padding: 20px 10px;
        cursor: pointer;
        flex-wrap: nowrap;
        border: none;
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
        background-color: transparent;
        padding: 20px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);
        color: #c0c0c0;
        font-family: Galamond;
        font-size: 20px;
        text-transform: uppercase;
        flex-wrap: nowrap;
        border: none;
        cursor: pointer;
        display:flex;
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

const BurgerLinkWrapper = styled.div`
    justify: center;
`