import React from 'react'
import PropTypes from 'prop-types'

const Addon = props => {
  return (
    <div className='flex-container addon'>
      <input className='checkbox' type='checkbox'/>
      <div className='flex-container addon-info'>
        <div>
          <p className='blue-text addon-title'>Online service</p>
          <p className='light-text'>Access to multiplayer games</p>
        </div>
        <p className='purple-text'>+$1/mo</p>
      </div>
    </div>
  )
}

Addon.propTypes = {

}

export default Addon
