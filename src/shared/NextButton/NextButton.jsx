import React from 'react'
import './NextButton.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
export const NextButton = ({text, onClick, parte}) => {
  return (
    <>
      <button className={`next-button btn ${parte===3?"opacity-0":""} `} disabled={parte === 3 ? true : false} type='button' onClick={() => onClick()}>{text}</button>
    </>
  )
}
