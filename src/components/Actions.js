import React from 'react'
import Button from './Button'
import {Link} from 'react-router-dom'

const ButtonContainer = () => {
  return (
    <div className='actions flex-container sp-btwn'>
        <p>Go Back</p>
        <Button/>
    </div>
  )
}

export default ButtonContainer
