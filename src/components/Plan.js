import React from 'react'
import PropTypes from 'prop-types'

const Plan = ({img_src, plan_title, monthly_rate, yearly_rate, offer}) => {
  return (
    <div className='flex-container plan'>
      <div className='image-container'>
        <img src={img_src} alt='plan icon'/>
      </div>

      <div>
        <p className='blue-text plan-title'>{plan_title}</p>
        <p className='light-text'>{monthly_rate}</p>
        <p className='offer-text'>{offer}</p>
      </div>
    </div>
  )
}

Plan.propTypes = {
  img_src: PropTypes.string.isRequired,
  plan_title: PropTypes.string.isRequired,
  monthly_rate: PropTypes.string.isRequired,
  yearly_rate: PropTypes.string,
  offer: PropTypes.string,
}

export default Plan
