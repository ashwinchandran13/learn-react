import React from 'react'
import data from '../memesData';

const Meme = () => {

    function handleClick () {
      const totalMeme = data.length;
      console.log(data[Math.floor(Math.random() * totalMeme)].url);
    }
    
  return (
    <main>
        <img src={'images/troll.png'} alt='troll' onMouseEnter={handleClick}/>
        <div>
            <input type="text" placeholder='Top Text' name='topText' className='form--inputField' />
            <input type="text" placeholder='Bottom Text' name='bottomText' className='form--inputField' />
            <button className='form--submitBtn' onClick={handleClick}>Get a new meme image  🖼</button>
        </div>
    </main>
  )
}

export default Meme