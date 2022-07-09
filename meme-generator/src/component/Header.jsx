import React from 'react'

const Header = () => {
  return (
    <header>
        <div className='header--logo'>
            <img src={'images/troll.png'} alt='troll face' className='header--image'/>
            <h2 className='header--title'>MemeGenerator</h2>
        </div>
        <h4 className='header--subtitle'>React Course - Project 3</h4>
    </header>
  )
}

export default Header