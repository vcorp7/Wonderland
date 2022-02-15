import React from 'react'
//import YouTubePlayer from 'react-player/youtube'
import styled from 'styled-components'
//import YouTube from '@u-wave/react-youtube'


function Specialevents() {
  return (
    <Containter>
        <Video>
        <iframe width="420" height="315"
            src="https://www.youtube.com/embed/tgbNymZ7vqY" title='Muppets?'>
        </iframe>    
        </Video>
        
    </Containter>
  )
}

export default Specialevents

const Containter = styled.div`
    
    background: #000080;
    justify-content: center;
    align-items: center;
    //
    display: flex;
    height: 100vh;
    width: 100vw;
    
`
const Video = styled.div`
    margin-top: 10vh;
    iframe{
        width: 100vw;
        height: 90vh;
    }
`
