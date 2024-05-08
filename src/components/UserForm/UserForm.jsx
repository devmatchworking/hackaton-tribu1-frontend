import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

export const UserForm = () => {
    return (
        <Formik
            initialValues={{
                name: '',
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

                if (!values.education) {
                    errors.education = 'Formación es requerida'
                } else if (values.education.length < 3) {
                    errors.education = 'Formación debe tener al menos 3 caracteres'
                } else if (!/^[a-zA-Z\s]*$/.test(values.education)) {
                    errors.education = 'Formación solo puede contener letras'
                }
                if (values.experience) {
                    if (values.experience.length < 3) {
                        errors.experience = 'Experiencia debe tener al menos 3 caracteres'
                    } else if (values.experience.length > 500) {
                        errors.experience = 'Experiencia debe tener menos de 500 caracteres'
                    }
                    else if (!/^[a-zA-Z\s]*$/.test(values.experience)) {
                        errors.experience = 'Experiencia solo puede contener letras'
                    }
                }
                if (values.additionalInfo) {
                    if (values.additionalInfo.length < 3) {
                        errors.additionalInfo = 'Información adicional debe tener al menos 3 caracteres'
                    } else if (values.additionalInfo.length > 500) {
                        errors.additionalInfo = 'Información adicional debe tener menos de 500 caracteres'
                    }
                    else if (!/^[a-zA-Z\s]*$/.test(values.additionalInfo)) {
                        errors.additionalInfo = 'Información adicional solo puede contener letras'
                    }
                }
                return errors
            }}
            onSubmit={() => {
                console.log('Form submitted')
            }}
        >
            {({ errors }) => (
                <Form className='border border-red-500'>
                    <div>
                        <Field type="text" name="name" placeholder="Ej. Stephen King" />
                        <span>Nombre y Apellido*</span>
                        <ErrorMessage name="name" component="div" />
                    </div>
                    <div>
                        <Field type="text" name="education" placeholder="Ej. Estudiante / Ingeniero en sistemas" />
                        <span>Formación*</span>
                        <ErrorMessage name="education" component="div" />
                    </div>
                    <div>
                        <Field type="text" as="textarea" name="experience" placeholder="Ej. 2 años desarrollando con APIS con Fast API" />
                        <span>Experiencia (opcional)</span>
                        <ErrorMessage name="experience" component="div" />
                    </div>
                    <div>
                        <Field type="text" as="textarea" name="additionalInfo" placeholder="Additional Info" />
                        <span>Información adicional (opcional)</span>
                        <ErrorMessage name="additionalInfo" component="div" />
                    </div>
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    )
}
