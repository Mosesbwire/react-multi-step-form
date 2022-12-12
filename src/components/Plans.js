import React from 'react'
import PropTypes from 'prop-types'
import Plan from './Plan'

const Plans = props => {
  return (
    <div>
      <hi>Select your plan</hi>
      <p>You have the option of monthly or yearly billing.</p>

      <div>
        <Plan />
        <Plan />
        <Plan />
      </div>

      <div>
        <div>
            <p>Monthly</p>
            <div></div>
            <p>Yearly</p>
        </div>
      </div>
    </div>
  )
}

Plans.propTypes = {

}

export default Plans
