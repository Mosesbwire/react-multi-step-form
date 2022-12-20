import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'
import {useNavigate} from 'react-router-dom'


const ButtonContainer = ({text, btnColor, setPage, page}) => {
  const navigate = useNavigate()

  
  
  return (
    <div className='actions flex-container sp-btwn'>
        <p className='light-text back-link' onClick={e => setPage(page - 1)}>Go Back</p> 
        <Button text={text} btnColor={btnColor} setPage={setPage} page={page}/>
    </div>
  )
}

ButtonContainer.propTypes = {
  text:PropTypes.string.isRequired,
  btnColor:PropTypes.string,
  setPage: PropTypes.func.isRequired,
  page:PropTypes.number.isRequired,
  
}

export default ButtonContainer
