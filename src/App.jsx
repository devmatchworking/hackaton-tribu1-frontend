import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserForm } from './components/UserForm/UserForm'
import { CompanyForm } from './components/CompanyForm/CompanyForm'

function App() {
  

  return (
    <>
      <UserForm />
      <CompanyForm />
    </>
  )
}

export default App
