import React from 'react'
import Header from './component/Header';
import Meme from './component/Meme';

const App = () => {

  function greeting(name) {
    let greetings = '';
    const date = new Date();
    const hours =11;
    console.log({hours});
    if (hours > 11 && hours < 17) {
      greetings = 'afternoon';
    } else if (hours > 3 && hours < 12) {
      greetings = 'morning';
    } else if (hours > 17 && hours < 20) {
      greetings = 'evening'
    } else {
      greetings = 'night'
    }

    console.log(`Good ${greetings}, ${name}`);
  }

  return (
    <div>
      <button onClick={() => greeting('alan')}>click</button>
      <Header />
      <Meme />
    </div>
  );
}
export default App