import React from 'react'
import './NextButton.css'
export const NextButton = ({text}) => {
  return (
    <>
        <button className='next-button btn' type='submit'>{text}</button>
    </>
  )
}
