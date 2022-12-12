import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


const ButtonContainer = ({text, btnColor}) => {
  return (
    <div className='actions flex-container sp-btwn'>
        <p className='light-text'>Go Back</p>
        <Button text={text} btnColor={btnColor}/>
    </div>
  )
}

ButtonContainer.propTypes = {
  text:PropTypes.string.isRequired,
  btnColor:PropTypes.string,
}

export default ButtonContainer
