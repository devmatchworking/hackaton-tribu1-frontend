import React from 'react'
import './NextButton.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
export const NextButton = ({text, onClick, parte}) => {
  return (
    <>
      <button className={`next-button btn `} type='button' onClick={() => onClick()}>{text}</button>
    </>
  )
}
