import React from 'react';
import styled from 'styled-components';
import LocationCard from './LocationCard';
import treeSky from './images/943634-tree-sky-water-space.jpg'

function Locations() {
  return(
      <Container>
          <Cards>
              <h1>Check out these EPIC Destinations!</h1>
              <CardContainter>
                  <CardWrapper>
                    <UList>
                        <LocationCard
                            src={treeSky}
                            text='Set Sail in the Ocean of Stars'
                            lebel='SKY'
                            path='https://youtu.be/pqXcoDqU8mk'
                        />
                        <LocationCard
                            src={'ufo1.jpg'}
                            text='Primal world of Possibilites'
                            lebel='ICE'
                            path='https://youtu.be/tiv2tySHzQQ'
                        />
                        <LocationCard
                            src={'planetSky.jpg'}
                            text='Primal world of Certainties'
                            lebel='FIRE'
                            path='https://youtu.be/vixl-uscO0o'
                        />
                    </UList>
                  </CardWrapper>
              </CardContainter>
              
          </Cards>
      </Container>
  );
}

export default Locations;

const Cards = styled.div`
    //color: white;
    
    
`

const Container = styled.div`
    padding: 4rem;
    background: #708090;
    height: 100vh;
    width: 100vw;
    color: #DC143C;
    display: flex;
    //flex-flow: column;
    align-items: center;
    .h1{
        text-align: center;
    }
`
const UList = styled.ul`
    display: flex;

`
const CardContainter = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    max-width: 1120px;
    width: 90%;
    margin: 0 auto;
    
`
const CardWrapper = styled.div`
    position: relative;
    display: flex;
    margin: 50px 0 45px;
    border-style: bold;
`
