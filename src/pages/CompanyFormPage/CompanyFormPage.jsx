import React from 'react'
import { UserForm } from '../../components/UserForm/UserForm'
import './CompanyFormPage.css'
import { Menu } from '../../components/MenuComponent/Menu'
import { FormContext, FormProvider } from '../../context/Form-Context'
import { CompanyForm } from '../../components/CompanyForm/CompanyForm'

export const CompanyFormPage = () => {
    return (
        <FormProvider>
          <div className='form-page'>
            <div className='menu-container'>
              <Menu />
            </div>
            <div className='form-container'>
              <h1 className='text-[1.75rem] font-bold'>Información sobre la empresa</h1>
              <p>Para continuar, necesitamos que rellenes la siguiente información</p>
              <CompanyForm />
            </div>
          </div>
        </FormProvider>
      )
}
