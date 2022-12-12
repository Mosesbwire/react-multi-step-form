import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Button = ({text, btnColor}) => {
  return (
      <button className={`btn ${btnColor}`}>{text}</button>
  )
}

Button.propTypes = {
  text:PropTypes.string.isRequired,
  btnColor:PropTypes.string,
}

export default Button
