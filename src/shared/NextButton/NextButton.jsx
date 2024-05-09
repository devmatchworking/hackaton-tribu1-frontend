import React from 'react'
import './NextButton.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
export const NextButton = ({text, valid}) => {
  return (
    <>
    
        <Link to='/company'>
        <button  className='next-button btn' type='submit'>{text}</button>
        </Link>
    
    </>
  )
}
