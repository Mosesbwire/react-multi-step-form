import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import {Link } from 'react-router-dom'

const Summary = props => {
  return (
    <div>
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      <div>
        <div>
            <div>
                <p>Arcade (Monthly)</p>
                <Link>change</Link>
            </div>
            <p>$9/mo</p>
        </div>
        <div>
          <div>
            <p>Online service</p>
            <p>+$1/mo</p>
          </div>
          <div>
            <p>Larger storage</p>
            <p>+$2/mo</p>
          </div>
        </div>
      </div>
      <div>
        <p>Total (per month)</p>
        <p>+$12/mo</p>
      </div>
    </div>
  )
}

Summary.propTypes = {
  
}

export default Summary
