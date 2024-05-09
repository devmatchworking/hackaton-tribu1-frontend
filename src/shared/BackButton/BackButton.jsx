import React from 'react'
import './BackButton.css'
import { useParams, useNavigate } from 'react-router-dom'

export const BackButton = ({text, onClick}) => {
  const navigate = useNavigate()
  return (
    <>
      <button className="back-button btn" type='button' onClick={() => navigate(-1)}>{text}</button>
    </>
  )
}
