import React, { useState, useEffect } from 'react'

const Meme = () => {

  const [formData, setFormData] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://imgflip.com/s/meme/Drake-Hotline-Bling.jpg'
  });

  const [allMemeImages, setAllMemeImages] = useState([]);

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((response) => response.json())
      .then((data) => setAllMemeImages(data.data.memes));
  }, [])
  console.log({allMemeImages});
  function getMemeImage(url) {
    setFormData(prevImage => {
      return {
        ...prevImage,
        randomImage: url
      }
    });
  }

  function handleClick () {
    const totalMeme = allMemeImages.length;
    getMemeImage(allMemeImages[Math.floor(Math.random() * totalMeme)].url);
  }

  function handleChange(event) {
    const { value, name } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: [value]
      }
    })
  }

    
  return (
    <main>
        <div className='form--container'>
            <input type="text" placeholder='Top Text' name='topText' onChange={handleChange} value={formData.topText} className='form--inputField' />
            <input type="text" placeholder='Bottom Text' name='bottomText' onChange={handleChange} value={formData.bottomText} className='form--inputField' />
            <button className='form--submitBtn' onClick={(event) => handleClick(event)}>Get a new meme image  🖼</button>
            <div className="meme">
              <img className='form--meme-image' src={formData.randomImage} alt={formData.randomImage} />
              <h2 className='meme--text top'>{formData.topText}</h2>
              <h2 className='meme--text bottom'>{formData.bottomText}</h2>
            </div>
        </div>
    </main>
  )
}

export default Meme