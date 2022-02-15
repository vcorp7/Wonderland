import React from 'react';
//import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {GiRabbitHead} from 'react-icons/gi'

function HeroSection() {
  return (
    <Container>
        <video src='MilkyWay1.mp4' autoPlay loop muted />
        <SubContainer>
          Don't be late to discover the true Wonderland
        </SubContainer>
        <Button>
          <a href='https://www.blender.org'>
            <GiRabbitHead/> Follow Me!
          </a>
        </Button>
        
    </Container>
      
  );
}

export default HeroSection;

const Container = styled.div`
  //background-image = url('flowerRain.png');
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;
  color: white;
  //z-index: 5;
  video{
        object-fit: cover;
        width: 100vw;
        height: 100vh;
        position: fixed;
        //top: 9vh;
        left: 0;
        z-index: -1;
    }
`

const SubContainer = styled.div`
    //background: black;
    font-size: 70px;
    font-family: Galamond;
    text-align: center;
    width: 70vw;
`
const Button = styled.button`
    background: black;
    color: white;
    width: 300px;
    height: 90px;
    font-size: 30px;
    border-radius: 12px;
    text-decoration: none !important;
    a{
      text-decoration: none;
      color: #fff;
    }
`
