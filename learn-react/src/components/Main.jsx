import React from 'react'

const Main = (props) => {
  const { lightMode } = props;
  const mode = lightMode ? 'light-main' : 'dark-main';

  return (
    <div className={`main-block ${mode}`}>
      <h1>Fun facts about React</h1>
      <ul className='points-block'>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  )
}

export default Main