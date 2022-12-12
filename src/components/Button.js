import React from 'react'
import PropTypes from 'prop-types'

const Button = ({text}) => {
  return (
    <Fragment>
      <Button>{text}</Button>
    </Fragment>
  )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Button
