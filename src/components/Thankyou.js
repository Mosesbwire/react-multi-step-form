import React from 'react'
import checkmark from '../assets/images/icon-thank-you.svg'

const Thankyou = () => {
  return (
    <div>
      <div>
        <img src={checkmark} alt='confirmation checkmark'/>
        <p>Thank you!</p>
        <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
      </div>
    </div>
  )
}

export default Thankyou
