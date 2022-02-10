import React from 'react';
import Locations from './Locations';
import styled from 'styled-components';
import HeroSection from './HeroSection';
import Footer from './Footer';

function Home() {
  return(
    <Container>
      <HeroSection/>
      <Locations/>
      <Footer id='Location'/>
    </Container>
    
  );
}

export default Home;

const Container = styled.div`
    height: 100vh;
    z-index: 10;

    flex-direction: column;
    
`