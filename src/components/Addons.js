import React from 'react'
import PropTypes from 'prop-types'
import Addon from './Addon'

const Addons = props => {
  return (
    <div>
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>

      <div>
        <Addon/>
        <Addon/>
        <Addon/>
      </div>
    </div>
  )
}

Addons.propTypes = {

}

export default Addons
