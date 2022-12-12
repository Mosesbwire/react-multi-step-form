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
                <p className='blue-text sb-text'>Arcade (Monthly)</p>
                <Link className='light-text'>Change</Link>
            </div>
            <p className='blue-text sb-text'>$9/mo</p>
        </div>
        <div className='addon-summary'>
          <div className='flex-container sp-btwn'>
            <p className='light-text'>Online service</p>
            <p className='blue-text'>+$1/mo</p>
          </div>
          <div className='flex-container sp-btwn'>
            <p className='light-text'>Larger storage</p>
            <p className='blue-text'>+$2/mo</p>
          </div>
        </div>
      </div>
      <div className='flex-container sp-btwn total-section'> 
        <p className='light-text'>Total (per month)</p>
        <p className='total-amount'>+$12/mo</p>
      </div>
      <Action text={'Confirm'} btnColor={'bg-light'}/>
    </div>
  )
}

Summary.propTypes = {
  
}

export default Summary
