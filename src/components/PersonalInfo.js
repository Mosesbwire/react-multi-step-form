import React from 'react'
import PropTypes from 'prop-types'

const PersonalInfo = props => {
  return (
    <div>
      <h1>Personal info</h1>
      <p>Please provide your name,email,address,and phone number.</p>
      
      <div>
        <div>
            <label htmlFor='name'>Name</label>
            <input type={'text'} name='name' required/>
        </div>
        <div>
            <label htmlFor='email'>Email Address</label>
            <input type={'email'} name='email' required/>
        </div>
        <div>
            <label htmlFor='phoneNumber'>Phone Number</label>
            <input type={'tel'} name='phoneNumber'/>
        </div>
      </div>
    </div>
  )
}

PersonalInfo.propTypes = {

}

export default PersonalInfo
