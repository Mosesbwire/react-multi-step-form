import React from 'react'
import PropTypes from 'prop-types'
import Plan from './Plan'
import Action from './Actions'

const Plans = props => {
  return (
    <div className='card-info'>
      <hi className='primary-title'>Select your plan</hi>
      <p className='secondary-title'>You have the option of monthly or yearly billing.</p>

      <div>
        <Plan />
        <Plan />
        <Plan />
      </div>

      <div className='billing-cycle'>
        <div className='flex-container billing-cycle-wrapper'>
            <p>Monthly</p>
            <div className='select-billing-cycle'>
              <div className='cycle-selector'></div>
            </div>
            <p>Yearly</p>
        </div>
      </div>
      <Action/>
    </div>
  )
}

Plans.propTypes = {

}

export default Plans
