import React from 'react'
import Button from './Button'
import {Link} from 'react-router-dom'

const ButtonContainer = () => {
  return (
    <div>
        <Link>Go back</Link>
        <Button text={'Next step'}/>
    </div>
  )
}

export default ButtonContainer
