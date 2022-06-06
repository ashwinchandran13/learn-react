import React from 'react'

const Card = () => {
    return (
        <div className='card'>
            <div className='card--pic'>
                <span className='card--ticket-status'>Sold Out</span>
                <img src={require('../images/katie.png')} alt="katie pic" />
            </div>
            <div className='card--reviews'>
                <img src={require('../images/starr.png')} height='14px' width='14px' alt="star pic" />
                <span className='card--rating'>5.0</span>
                <span className='card--reviews'>(6)&#x000B7;USA</span>
            </div>
            <p className='card--title'>Life lessons with Katie Zaferes</p>
            <span className='card--payment'>
                <p className='card--price'>From $136&nbsp;</p>
                <p className='card--quantity'>/ person</p>
            </span>
        </div>
    )
}

export default Card