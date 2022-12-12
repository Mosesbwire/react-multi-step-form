import React from 'react'
import PropTypes from 'prop-types'
import Addon from './Addon'
import Action from './Actions'

const Addons = props => {
  return (
    <div className='card-info'>
      <h1 className='primary-title'>Pick add-ons</h1>
      <p className='secondary-title'>Add-ons help enhance your gaming experience.</p>

      <div>
        <Addon/>
        <Addon/>
        <Addon/>
      </div>
      <Action/>
    </div>
  )
}

Addons.propTypes = {

}

export default Addons
