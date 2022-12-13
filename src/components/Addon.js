import React from 'react'
import PropTypes from 'prop-types'

const Addon = ({addon}) => {
  return (
    <div className='flex-container addon'>
      <input className='checkbox' type='checkbox'/>
      <div className='flex-container addon-info'>
        <div>
          <p className='blue-text addon-title'>{addon.name}</p>
          <p className='light-text'>{addon.description}</p>
        </div>
        <p className='purple-text'>+${addon.monthlyRate}</p>
      </div>
    </div>
  )
}

Addon.propTypes = {
  addon: PropTypes.object.isRequired,
}

export default Addon
