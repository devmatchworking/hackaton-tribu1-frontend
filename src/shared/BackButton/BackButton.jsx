/* eslint-disable react/prop-types */
import React from 'react'
import './BackButton.css'
import { useParams, useNavigate } from 'react-router-dom'

export const BackButton = ({text, onClick, parte}) => {
  const navigate = useNavigate()
  return (
    <>
      <button className={`back-button btn ${parte===1?"opacity-0":""} `} disabled={parte === 1 ? true : false} type='button' onClick={() => onClick()}>{text}</button>
    </>
  )
}
