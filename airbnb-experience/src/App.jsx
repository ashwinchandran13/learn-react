import React from 'react'
import Card from './components/Card'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Hero /> */}
      <Card 
        profileImage={'images/katie.png'}
        rating={5.0}
        reviewCount={6}
        country={'USA'}
        title={'Life lessons with Katie Zaferes'}
        price={136}
      />
    </div>
  )
}

export default App