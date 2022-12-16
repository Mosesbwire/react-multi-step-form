import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'
import {Link, useNavigate, useLocation} from 'react-router-dom'


const ButtonContainer = ({text, btnColor, link}) => {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <div className='actions flex-container sp-btwn'>
        {location.pathname !== '/' ? <p className='light-text back-link' onClick={e => navigate(-1)}>Go Back</p> : null}
        
        <Link to={link}>
          <Button text={text} btnColor={btnColor}/>
        </Link>
    </div>
  )
}

ButtonContainer.propTypes = {
  text:PropTypes.string.isRequired,
  btnColor:PropTypes.string,
  link: PropTypes.string.isRequired,
}

export default ButtonContainer
