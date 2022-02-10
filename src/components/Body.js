import React from 'react';
import styled from 'styled-components';
import Spacer from './Spacer';
import HeroSection from './HeroSection';
import Locations from './Locations';
import Contactus from './Contactus';
import Aboutus from './Aboutus';

function Body() {
  return (
    <Container>
      <Spacer/>
      <HeroSection/>
      <Spacer/>
      <Locations/>
      <Spacer/>
      <Aboutus/>
      <Spacer/>
      <Contactus/>
    </Container>
  );
}

export default Body;

const Container = styled.div`
  color: white;
  height: 100vh;
  z-index: 10;

  flex-direction: column;
`