import React from 'react'
import PropTypes from 'prop-types'

const Step = ({step_number, step_text, step_info}) => {
  return (
    <div className='flex-container step'>
      <div className='step-circle'>
        <p className='step-number'>{step_number}</p>
      </div>
      <div className='hidden-sm'>
        <p className='step-text'>{step_text}</p>
        <p className='step-info'>{step_info}</p>
      </div>
    </div>
  )
}

Step.propTypes = {
  step_number: PropTypes.string.isRequired,
  step_text: PropTypes.string.isRequired,
  step_info: PropTypes.string.isRequired,
}

export default Step
