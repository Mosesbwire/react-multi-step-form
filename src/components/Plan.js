import React from 'react'
import PropTypes from 'prop-types'

const Plan = ({plan}) => {
  return (
    <div className='flex-container plan'>
      <div className='image-container'>
        <img src={plan.imgUrl} alt='plan icon'/>
      </div>

      <div>
        <p className='blue-text plan-title'>{plan.name}</p>
        <p className='light-text'>${plan.monthlyRate}</p>
        <p className='offer-text'>{plan.offer}</p>
      </div>
    </div>
  )
}

Plan.propTypes = {
  plan: PropTypes.object.isRequired,
}

export default Plan
