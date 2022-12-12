import React from 'react'
import checkmark from '../assets/images/icon-thank-you.svg'

const Thankyou = () => {
  return (
    <div className='thankyou card-info'>
      <div className='thanks-wrapper'>
        <div className='thanks'>
          <img src={checkmark} alt='confirmation checkmark'/>
          <h1 className='primary-title'>Thank you!</h1>
          <p className='light-text'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
        </div>
      </div>
    </div>
  )
}

export default Thankyou
