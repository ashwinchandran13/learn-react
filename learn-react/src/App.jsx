import React from 'react'
import Main from './components/Main'
import Navbar from './components/Navbar'

const App = () => {
  const [lightMode, setLightMode] = React.useState(false);

  function toggleMode() {
    setLightMode(prevValue => !prevValue);
  }
  const mode = lightMode ? 'light-app' : 'dark-app';
  
  return (
    <div className={`app ${mode}`}>
        <Navbar toggleMode={toggleMode} lightMode={lightMode} />
        <Main lightMode={lightMode}/>
    </div>
  )
}

export default App