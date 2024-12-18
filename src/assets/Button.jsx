import React from 'react'
import PropTypes from "prop-types"
const Button = ({color, title}) => {
  return (
   <button className={`${color} px-5 py-2 rounded-full text-blue-900 font-semibold`}>
    {title}
   </button>
  )
}

export default Button
Button.propTypes = {
    color: PropTypes.string,
    title: PropTypes.string,
}