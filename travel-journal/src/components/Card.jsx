import React from 'react'

const Card = ({description, endDate, googleMapsUrl, imageUrl, location, startDate, title}) => {
  return (
    <div className='card'>
      <img src={imageUrl} className='card--location-pic' alt="pic" />
      <div className='card--details'>
        <div className='card--location'>
          <img src={'images/map.png'} alt="map pointer" className='location--pointer' />
          <span className='location--name'>{location}</span>
          <a href={googleMapsUrl} alt='location'>View on Google Maps</a>
        </div>
        <h1>{title}</h1>
        <div className='card--duration'>
          <span>{startDate} - {endDate}</span>
        </div>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Card