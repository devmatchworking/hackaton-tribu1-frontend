import React from 'react'
import { UserForm } from '../../components/UserForm/UserForm'
import { Menu } from '../../components/MenuComponent/Menu'
import { FormContext, FormProvider } from '../../context/Form-Context'
import './UserFormPage.css'
export const UserFormPage = () => {
  return (
    <FormProvider>
      <div className='form-page'>
        <div className='menu-container'>
          <Menu />
        </div>
        <div className='form-container'>
          <h1 className='text-[1.75rem] font-bold'>Información Personal</h1>
          <p>Para continuar, necesitamos que rellenes la siguiente información</p>
          <UserForm />
        </div>
      </div>
    </FormProvider>
  )
}
