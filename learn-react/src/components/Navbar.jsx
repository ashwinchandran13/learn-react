import React from 'react'

const Navbar = (props) => {
  const {
    lightMode,
    toggleMode
  } = props;

  const mode = lightMode ? 'light-mode' : 'dark-mode';

  return (
    <div className={`nav-block ${mode}`}>
      <div className='page-title'>
        <img alt='react logo' src='images/react.png' height={40} width={40} />
        <span className='title'>ReactFacts</span>
      </div>
      <div className='menu-container'>
        <div className='menu-container-mode-box'>
          <label className='menu-container--dark-mode-text' htmlFor="darkMode">Dark Mode</label>
        {lightMode ? (
          <img src='images/icon-on.png' onClick={toggleMode} alt="ui mode" className='menu-container--mode-btn' height={30}/>
        ) : (
          <img src='images/icon-off.png' onClick={toggleMode} alt="ui mode" className='menu-container--mode-btn' height={30}/>
        )}
          <label className='menu-container--light-mode-text' htmlFor="lightMode">Light Mode</label>
        </div>
        <div className='menu'>
          <p>React Course-Project</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar