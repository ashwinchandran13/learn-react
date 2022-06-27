import React from 'react'

const Card = ({coverImg, stats, reviewCount, location, title, price, openSpots}) => {
    
    let badgeText
    if (openSpots === 0) {
        badgeText = 'SOLD OUT'
    } else if (location === 'Online') {
        badgeText = 'Online'
    } else {
        badgeText = null;
    }

    return (
        <div className='card'>
            <div className='card--pic'>
                {badgeText && (openSpots === 0 ? 
                    (<span className='card--ticket-status'>{badgeText}</span>)
                    :
                    (<span className='card--ticket-status'>{badgeText}</span>)
                )}
                <img src={coverImg} alt="katie pic" />
            </div>
            <div className='card--reviews'>
                <img src={'images/starr.png'} height='14px' width='14px' alt="star pic" />
                <span className='card--rating'>{stats.rating}</span>
                <span className='card--reviews'>({stats.reviewCount})&#x000B7;{location}</span>
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