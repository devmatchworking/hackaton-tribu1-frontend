import React, { useEffect, useState } from 'react'
import { FormContext } from '../../context/Form-Context'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { BackButton } from '../../shared/BackButton/BackButton'
import { NextButton } from '../../shared/NextButton/NextButton'
export const CompanyForm = () => {

  const { companyForm, setCompanyForm } = React.useContext(FormContext)
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (formSubmitted) {
      const objetoJSON = JSON.stringify(companyForm);
      sessionStorage.setItem("companyForm", objetoJSON);
    }
  }, [formSubmitted, setCompanyForm, companyForm]);

  return (
    <Formik
      initialValues={{
        companyname: '',
        appliedPosition: '',
        recipient: '',
        recipientPosition: '',
        companyInfo: '',
      }}
      validate={(values) => {
        let errors = {}
        if (!values.companyname) {
          errors.companyname = 'El nombre de la empresa es requerido'
        } else if (values.companyname.length < 3) {
          errors.companyname = 'El nombre de la empresa debe tener al menos 3 caracteres'
        } else if (!/^[a-zA-Z\s]*$/.test(values.companyname)) {
          errors.companyname = 'El nombre de la empresa solo puede contener letras'
        }
        if (!values.appliedPosition) {
          errors.appliedPosition = 'El cargo es requerido'
        } else if (values.appliedPosition.length < 3) {
          errors.appliedPosition = 'El cargo debe tener al menos 3 caracteres'
        } else if (!/^[a-zA-Z\s]*$/.test(values.appliedPosition)) {
          errors.appliedPosition = 'El cargo solo puede contener letras'
        }


        if (values.recipient) {
          if (values.recipient.length < 3) {
            errors.recipient = 'Destinatario debe tener al menos 3 caracteres'
          } else if (!/^[a-zA-Z0-9\u00C0-\u024F\s]*$/.test(values.recipient)) {
            errors.recipient = 'Destinatario solo puede contener letras'
          }
        }
        if (values.recipientPosition) {
          if (values.recipientPosition.length < 3) {
            errors.recipientPosition = 'Cargo destinatario debe tener al menos 3 caracteres'
          } else if (values.recipientPosition.length > 500) {
            errors.recipientPosition = 'Cargo destinatario debe tener menos de 500 caracteres'
          }
          else if (!/^[a-zA-Z0-9\u00C0-\u024F\s]*$/.test(values.recipientPosition)) {
            errors.recipientPosition = 'Cargo destinatario solo puede contener letras'
          }
        }

        if (values.companyInfo) {
          if (values.companyInfo.length < 3) {
            errors.companyInfo = 'Información sobre la empresa debe tener al menos 3 caracteres'
          } else if (values.companyInfo.length > 500) {
            errors.companyInfo = 'Información sobre la empresa debe tener menos de 500 caracteres'
          }
          else if (!/^[a-zA-Z0-9\u00C0-\u024F\s]*$/.test(values.companyInfo)) {
            errors.companyInfo = 'Información sobre la empresa solo puede contener letras'
          }
        }
        return errors
      }}
      onSubmit={(values, { setSubmitting }) => {
        setCompanyForm(values);
        setFormSubmitted(true);
        setSubmitting(false);
      }}
    >
      {({ errors, isValid = false }) => (

        <Form className='form' >

          <div className='form-input-container'>
            <p className='form-label'>Empresa*</p>
            <Field type="text" name="companyname" placeholder="Ej. Matchworking" className={`form-input`} />
            <ErrorMessage name="companyname" component={() => <div className='error'>{errors.companyname}</div>} />
          </div>
          <div className='form-input-container'>
            <p className='form-label'>Cargo aplicado *</p>
            <Field type="text" name="appliedPosition" placeholder="Ej. Desarrollador frontend" className={`form-input `} />
            <ErrorMessage name="appliedPosition" component={() => <div className='error'>{errors.appliedPosition}</div>} />
          </div>

          <div className='form-input-container'>
            <p className='form-label'>Destinatario (opcional)</p>
            <Field type="text" name="recipient" placeholder="Ej. Stephen King" className={`form-input ${errors.recipient ? 'error-input' : ''}`} />

            <ErrorMessage name="recipient" component={() => <div className='error'>{errors.recipient}</div>} />
          </div>

          <div className='form-input-container'>
            <p className='form-label'>Cargo Destinatario (opcional)</p>
            <Field type="text" name="recipientPosition" placeholder="Ej. Stephen King" className={`form-input ${errors.recipientPosition ? 'error-input' : ''}`} />

            <ErrorMessage name="recipientPosition" component={() => <div className='error'>{errors.recipientPosition}</div>} />
          </div>

          <div className='form-input-container'>
            <p className='form-label'>Información sobre la empresa (opcional)</p>
            <Field type="text" as="textarea" name="companyInfo" placeholder="Ingrese información adicional" className={`form-input ${errors.companyInfo ? 'error-input' : ''} form-area`} />

            <ErrorMessage name="companyInfo" component={() => <div className='error'>{errors.companyInfo}</div>} />
          </div>
          <button id="submit-btn" type="submit" className='absolute -top-[9999px] -left-[9999px]'>Submit</button>

        </Form>
      )}
    </Formik>


  )
}
