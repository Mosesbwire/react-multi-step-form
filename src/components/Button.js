import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Button = ({text, btnColor, setPage, page}) => {
  return (
      <button className={`btn ${btnColor}`} onClick={e => setPage(page + 1)}>{text}</button>
  )
}

Button.propTypes = {
  text:PropTypes.string.isRequired,
  btnColor:PropTypes.string,
  setPage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
}

export default Button
