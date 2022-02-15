import React from 'react';
import styled from 'styled-components';

function Aboutus() {
  return(
      <Container>
          <TextContainer>
            <Title>
                Our Mission  
            </Title>
            
            <Mission>
                <p>
                    To entertain, inform and inspire people around the globe through the power of unparalleled storytelling, reflecting the iconic brands, creative minds and innovative technologies that make ours the world’s premier entertainment company.  -DISNEY    
                </p>
            </Mission>    
          </TextContainer>
          
      </Container>
  );
}

export default Aboutus;

const Container = styled.div`
    //margin-top: 10vh;
    height: 100vh;
    width: 100vw;
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
    text-align: center;
    //background-color: #585858
    flex-direction: column;
    //background: #595959;
    background-image: url('pexels-eberhard-grossgasteiger-1624438.jpg');
    background-size: cover;
`
const TextContainer = styled.div`

`

const Title = styled.div`
    //width: 100vw;
    padding: 0 20px;
    padding-bottom: 20px;
    font-size: 40px;
    background: #fff;
    text-shadow: 2px 1px 0px #BF953F;
    font-weight: bold;
    background: linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
    
`

const Mission = styled.div`
    font-size: 25px;
    font-family: 'Galamond';
    text-shadow: 2px 1px 0px #BF953F;
    font-weight: bold;
    max-width: 80vw;
    //font-color: white;
    background: linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
`