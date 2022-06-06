import React from 'react'

const Hero = () => {
  return (
    <div className='hero--main'>
        <img src={require('../images/heroCollage.png')} alt="hero collage" className='hero--grid'/>
        <h1 className='hero--header'>Online Experiences</h1>
        <p className='hero--para'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </div>
  )
}

export default Hero