import React from 'react'
import PropTypes from 'prop-types'

const Step = props => {
  return (
    <div>
      <div className='step-circle'>
        <p>1</p>
      </div>
      <div>
        <p>Step 1</p>
        <p>Your info</p>
      </div>
    </div>
  )
}

Step.propTypes = {

}

export default Step
