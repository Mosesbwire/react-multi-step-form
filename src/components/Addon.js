import React from 'react'
import PropTypes from 'prop-types'

const Addon = props => {
  return (
    <div>
      <input type={checkbox}/>
      <div>
        <p>Online service</p>
        <p>Access to multiplayer games</p>
      </div>
      <p>+$1/mo</p>
    </div>
  )
}

Addon.propTypes = {

}

export default Addon
