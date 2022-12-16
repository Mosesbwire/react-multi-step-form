import React from 'react'
import PropTypes from 'prop-types'
import Action from './Actions'

const PersonalInfo = props => {
  return (
    <div className='card-info'>
      <h1 className='primary-title'>Personal info</h1>
      <p className='secondary-title'>Please provide your name,email,address,and phone number.</p>
      
      <div>
        <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input type={'text'} name='name' required/>
        </div>
        <div className='form-group'>
            <label htmlFor='email'>Email Address</label>
            <input type={'email'} name='email' required/>
        </div>
        <div className='form-group'>
            <label htmlFor='phoneNumber'>Phone Number</label>
            <input type={'tel'} name='phoneNumber'/>
        </div>
      </div>
      <Action text={'Next Step'} btnColor={'bg-dark'} link={'/plans'}/>
    </div>
  )
}

PersonalInfo.propTypes = {

}

export default PersonalInfo
