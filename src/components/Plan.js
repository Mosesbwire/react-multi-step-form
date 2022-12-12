import React from 'react'
import PropTypes from 'prop-types'
import iconsrc from '../assets/images/icon-arcade.svg'

const Plan = props => {
  return (
    <div className='flex-container plan'>
      <div className='image-container'>
        <img src={iconsrc} alt='plan icon'/>
      </div>

      <div>
        <p>Arcade</p>
        <p>$9/mo</p>
        <p className='offer-text'>2 months free</p>
      </div>
    </div>
  )
}

Plan.propTypes = {
  
}

export default Plan
