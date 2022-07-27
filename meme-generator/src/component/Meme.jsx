import React, { useState } from 'react'
import data from '../memesData';

const Meme = () => {

  const [memeImage, setMemeImage] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://imgflip.com/s/meme/Drake-Hotline-Bling.jpg'
  });

  const [allMemeImages, setAllMemeImages] = useState(data);

  function getMemeImage(url) {
    setMemeImage(prevImage => {
      return {
        ...prevImage,
        randomImage: url
      }
    });
  }

  function handleClick () {
    const totalMeme = allMemeImages.length;
    getMemeImage(data[Math.floor(Math.random() * totalMeme)].url);
  }

    
  return (
    <main>
        <div className='form--container'>
            <input type="text" placeholder='Top Text' name='topText' className='form--inputField' />
            <input type="text" placeholder='Bottom Text' name='bottomText' className='form--inputField' />
            <button className='form--submitBtn' onClick={handleClick}>Get a new meme image  🖼</button>
            <img className='form--meme-image' src={memeImage.randomImage} alt={memeImage.randomImage} />
        </div>
    </main>
  )
}

export default Meme