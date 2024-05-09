import React from 'react'
import { FormContext } from '../../context/Form-Context'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { BackButton } from '../../shared/BackButton/BackButton'
import { NextButton } from '../../shared/NextButton/NextButton'
import './UserForm.css'

export const UserForm = () => {

    const { userForm, setUserForm } = React.useContext(FormContext)
    

    return (
        <Formik
            initialValues={{
                name: '',
                lastName: '',
                education: '',
                experience: '',
                additionalInfo: '',
            }}
            validate={(values) => {
                let errors = {}
                if (!values.name) {
                    errors.name = 'El nombre es requerido'
                } else if (values.name.length < 3) {
                    errors.name = 'El nombre debe tener al menos 3 caracteres'
                } else if (!/^[a-zA-Z\s]*$/.test(values.name)) {
                    errors.name = 'El nombre solo puede contener letras'
                }
                if (!values.lastName) {
                    errors.lastName = 'El apellido es requerido'
                } else if (values.lastName.length < 3) {
                    errors.lastName = 'El apellido debe tener al menos 3 caracteres'
                } else if (!/^[a-zA-Z\s]*$/.test(values.lastName)) {
                    errors.lastName = 'El apellido solo puede contener letras'
                }

                if (!values.education) {
                    errors.education = 'Formación es requerida'
                } else if (values.education.length < 3) {
                    errors.education = 'Formación debe tener al menos 3 caracteres'
                } else if (!/^[a-zA-Z\u00C0-\u024F\s]*$/.test(values.education)) {
                    errors.education = 'Formación solo puede contener letras'
                }
                if (values.experience) {
                    if (values.experience.length < 3) {
                        errors.experience = 'Experiencia debe tener al menos 3 caracteres'
                    } else if (values.experience.length > 500) {
                        errors.experience = 'Experiencia debe tener menos de 500 caracteres'
                    }
                    else if (!/^[a-zA-Z0-9\u00C0-\u024F\s]*$/.test(values.experience)) {
                        errors.experience = 'Experiencia solo puede contener letras'
                    }
                }
                if (values.additionalInfo) {
                    if (values.additionalInfo.length < 3) {
                        errors.additionalInfo = 'Información adicional debe tener al menos 3 caracteres'
                    } else if (values.additionalInfo.length > 500) {
                        errors.additionalInfo = 'Información adicional debe tener menos de 500 caracteres'
                    }
                    else if (!/^[a-zA-Z0-9\u00C0-\u024F\s]*$/.test(values.additionalInfo)) {
                        errors.additionalInfo = 'Información adicional solo puede contener letras'
                    }
                }

                

                return errors
            }}
            onSubmit={(e) => {
                setUserForm(e)
            }}
        >
            {({ errors }) => (
                <Form className='form' >
                    <div className='flex'>
                        <div className='form-input-container grow pr-2'>
                            <p className='form-label'>Nombre*</p>
                            <Field type="text" name="name" placeholder="Ej. Stephen" className={`form-input`} />
                            <ErrorMessage name="name" component={() => <div className='error'>{errors.name}</div>} />
                        </div>
                        <div className='form-input-container grow pl-2'>
                            <p className='form-label'>Apellidos*</p>
                            <Field type="text" name="lastName" placeholder="Ej. King" className={`form-input `} />
                            <ErrorMessage name="lastName" component={() => <div className='error'>{errors.lastName}</div>} />
                        </div>
                    </div>

                    <div className='form-input-container'>
                        <p className='form-label'>Formación*</p>
                        <Field type="text" name="education" placeholder="Ej. Estudiante / Ingeniero en sistemas" className={`form-input`} />
                        <ErrorMessage name="education" component={() => <div className='error'>{errors.education}</div>} />
                    </div>
                    <div className='form-input-container'>
                        <p className='form-label'>Experiencia (opcional)</p>
                        <Field type="text" as="textarea" name="experience" placeholder="Ej. 2 años desarrollando con APIS con Fast API" className={`form-input ${errors.experience ? 'error-input' : ''} form-area`} />

                        <ErrorMessage name="experience" component={() => <div className='error'>{errors.experience}</div>} />
                    </div>
                    <div className='form-input-container'>
                        <p className='form-label'>Información adicional (opcional)</p>
                        <Field type="text" as="textarea" name="additionalInfo" placeholder="Ingrese información adicional" className={`form-input ${errors.additionalInfo ? 'error-input' : ''} form-area`} />

                        <ErrorMessage name="additionalInfo" component={() => <div className='error'>{errors.additionalInfo}</div>} />
                    </div>
                    {/* <div className='form-buttons-container'>
                        <BackButton text="Anterior" />
                        <div className='inline ml-3'>
                            <NextButton text="Siguiente" />
                        </div>
                    </div> */}
                </Form>
            )}
        </Formik>


    )
}
