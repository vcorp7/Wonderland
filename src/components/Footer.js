import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import {TiSocialYoutube, TiSocialInstagram, TiSocialFacebook, TiSocialTwitter, TiSocialLinkedin, } from 'react-icons/ti'

function Footer() {
  return(
    <Container>
        <Statement>
            <i>
               At every moment of our lives, 
            <br/>
               we all have one foot in a fairy tale and the other in the abyss. 
            </i>
            
        </Statement>
        <Social>
            <a href='https://www.youtube.com'>
               <button class='youtube'>
                    <TiSocialYoutube/>        
                </button> 
            </a>
            <a href='https://www.instagram.com'>
            <button class='instagram'>
                <TiSocialInstagram/>       
            </button>    
            </a>
            <a href='https://www.facebook.com'>
            <button class='facebook'>
                <TiSocialFacebook/>       
            </button>    
            </a>
            <a href='https://www.linkedin.com'>
            <button class='linkedin'>
                <TiSocialLinkedin/>      
            </button>    
            </a>
            <a href='https://www.twitter.com'>
            <button class='twitter'>
                <TiSocialTwitter/>       
            </button>    
            </a>
            
        </Social>  
    </Container>
    
  );
}

export default Footer;

const Container = styled.div`
    background-color: #242424;
    padding: 4rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const Statement = styled.div`
    font-family: 'Brush Script MT', cursive;
    color: white;
    display: flex;
    justify-content: center;
    text-align: center;
`

const Social = styled.div`
    padding-top: 10px;
    display: flex;
    justify-content: center;
    
    button{
        color: white;
        font-size: 20px;
        width: 40px;
        height: 40px;
        border: none;
        cursor: pointer;
        border-radius: 50%;
        margin-left: .25rem;
        margin-right: .25rem;
    }
    .youtube{
        background-color: #FF0000;

    }
    .instagram{
        //background: #d6249f;
        background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
    }
    .twitter{
        background-color: #1DA1F2;
    }
    .linkedin{
        background-color: #0072b1;
    }
    .facebook{
        background-color: #4267B2;
    }
`