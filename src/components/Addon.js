import React from 'react'
import PropTypes from 'prop-types'

const Addon = props => {
  return (
    <div className='flex-container addon'>
      <input className='checkbox' type='checkbox'/>
      <div className='flex-container addon-info'>
        <div>
          <p>Online service</p>
          <p>Access to multiplayer games</p>
        </div>
        <p>+$1/mo</p>
      </div>
    </div>
  )
}

Addon.propTypes = {

}

export default Addon
