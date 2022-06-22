import React from 'react'
import Card from './components/Card'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import data from './data'

const App = () => {
  const cardData = data.map(item => <Card coverImg={item.coverImg} rating={item.stats.rating} reviewCount={item.stats.reviewCount} location={item.location} title={item.title} price={item.price} openSpots={item.openSpots}/>)
  return (
    <div>
      <Navbar />
      {/* <Hero /> */}
      {cardData}
    </div>
  )
}

export default App