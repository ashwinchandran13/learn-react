import React from 'react'

const Card = ({profileImage, rating, reviewCount, country, title, price}) => {
    return (
        <div className='card'>
            <div className='card--pic'>
                <span className='card--ticket-status'>Sold Out</span>
                <img src={profileImage} alt="katie pic" />
            </div>
            <div className='card--reviews'>
                <img src={'images/starr.png'} height='14px' width='14px' alt="star pic" />
                <span className='card--rating'>{rating}</span>
                <span className='card--reviews'>({reviewCount})&#x000B7;{country}</span>
            </div>
            <p className='card--title'>{title}</p>
            <span className='card--payment'>
                <p className='card--price'>From ${price}&nbsp;</p>
                <p className='card--quantity'>/ person</p>
            </span>
        </div>
    )
}

export default Card