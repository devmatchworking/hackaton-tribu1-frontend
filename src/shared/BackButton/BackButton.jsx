import React from 'react'
import './BackButton.css'


export const BackButton = ({text, onClick}) => {
  
  return (
    <>
      <button className="back-button btn" type='button'>{text}</button>
    </>
  )
}
