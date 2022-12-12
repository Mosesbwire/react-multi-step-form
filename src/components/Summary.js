import React from 'react'
import PropTypes from 'prop-types'
import {Link } from 'react-router-dom'
import Action from './Actions'

const Summary = props => {
  return (
    <div className='card-info'>
      <h1 className='primary-title'>Finishing up</h1>
      <p className='secondary-title'>Double-check everything looks OK before confirming.</p>
      <div className='summary-section'>
        <div className='flex-container sp-btwn'>
            <div>
                <p>Arcade (Monthly)</p>
                <Link>change</Link>
            </div>
            <p>$9/mo</p>
        </div>
        <div className='addon-summary'>
          <div className='flex-container sp-btwn'>
            <p>Online service</p>
            <p>+$1/mo</p>
          </div>
          <div className='flex-container sp-btwn'>
            <p>Larger storage</p>
            <p>+$2/mo</p>
          </div>
        </div>
      </div>
      <div className='flex-container sp-btwn total-section'> 
        <p>Total (per month)</p>
        <p>+$12/mo</p>
      </div>
      <Action/>
    </div>
  )
}

Summary.propTypes = {
  
}

export default Summary
