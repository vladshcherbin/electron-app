import React from 'react'

const Button = ({ text }) => {
  function handleClick() {
    console.log('hello')
  }

  return (
    <button onClick={handleClick}>{text}</button>
  )
}

export default Button
