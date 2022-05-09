import React from 'react'

const Navbar = () => {
  return (
    <div className='nav-block'>
      <div className='page-title'>
        <img alt='react logo' src={require('../images/react.png')} height={40} width={40} />
        <span className='title'>ReactFacts</span>
      </div>
      <div className='menu-container'>
        <div className='menu'>
          <p>React Course-Project</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar