import React from 'react';
import styled from 'styled-components';

function Contactus() {
  return(
      <Container>
          Contact Us
      </Container>
  );
}

export default Contactus;

const Container = styled.div`
    color: white;
    justify-content: center;
    align-items: center;
    //margin-top: 10vh;
    display: flex;
    height: 100vh;
    width: 100vw;
    background: radial-gradient(484px at 49.4% 19%, rgb(23, 156, 214) 0%, rgb(52, 48, 111) 100.2%);
`