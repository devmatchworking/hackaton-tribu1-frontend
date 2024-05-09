// import React from 'react'
// import { FormContext } from '../../context/Form-Context'
// import { Formik, Form, Field, ErrorMessage } from 'formik'
// import { BackButton } from '../../shared/BackButton/BackButton'
// import { NextButton } from '../../shared/NextButton/NextButton'
// import './UserForm.css'

// export const UserForm = () => {

//     const { userForm, setUserForm } = React.useContext(FormContext)

//     return (
//         <Formik
//             initialValues={{
//                 name: '',
//                 lastName: '',
//                 education: '',
//                 experience: '',
//                 additionalInfo: '',
//             }}
//             validate={(values) => {
//                 let errors = {}
//                 if (!values.name) {
//                     errors.name = 'El nombre es requerido'
//                 } else if (values.name.length < 3) {
//                     errors.name = 'El nombre debe tener al menos 3 caracteres'
//                 } else if (!/^[a-zA-Z\s]*$/.test(values.name)) {
//                     errors.name = 'El nombre solo puede contener letras'
//                 }
//                 if (!values.lastName) {
//                     errors.lastName = 'El apellido es requerido'
//                 } else if (values.lastName.length < 3) {
//                     errors.lastName = 'El apellido debe tener al menos 3 caracteres'
//                 } else if (!/^[a-zA-Z\s]*$/.test(values.lastName)) {
//                     errors.lastName = 'El apellido solo puede contener letras'
//                 }

//                 if (!values.education) {
//                     errors.education = 'Formación es requerida'
//                 } else if (values.education.length < 3) {
//                     errors.education = 'Formación debe tener al menos 3 caracteres'
//                 } else if (!/^[a-zA-Z\u00C0-\u024F\s]*$/.test(values.education)) {
//                     errors.education = 'Formación solo puede contener letras'
//                 }
//                 if (values.experience) {
//                     if (values.experience.length < 3) {
//                         errors.experience = 'Experiencia debe tener al menos 3 caracteres'
//                     } else if (values.experience.length > 500) {
//                         errors.experience = 'Experiencia debe tener menos de 500 caracteres'
//                     }
//                     else if (!/^[a-zA-Z0-9\u00C0-\u024F\s]*$/.test(values.experience)) {
//                         errors.experience = 'Experiencia solo puede contener letras'
//                     }
//                 }
//                 if (values.additionalInfo) {
//                     if (values.additionalInfo.length < 3) {
//                         errors.additionalInfo = 'Información adicional debe tener al menos 3 caracteres'
//                     } else if (values.additionalInfo.length > 500) {
//                         errors.additionalInfo = 'Información adicional debe tener menos de 500 caracteres'
//                     }
//                     else if (!/^[a-zA-Z0-9\u00C0-\u024F\s]*$/.test(values.additionalInfo)) {
//                         errors.additionalInfo = 'Información adicional solo puede contener letras'
//                     }
//                 }

//                 return errors
//             }}
//             onSubmit={(e) => {
//                 setUserForm(e)
//             }}
//         >
//             {({ errors }) => (
//                 <Form className='form' >
//                     <div className='flex'>
//                         <div className='form-input-container grow pr-2'>
//                             <p className='form-label'>Nombre*</p>
//                             <Field type="text" name="name" placeholder="Ej. Stephen" className={`form-input`} />
//                             <ErrorMessage name="name" component={() => <div className='error'>{errors.name}</div>} />
//                         </div>
//                         <div className='form-input-container grow pl-2'>
//                             <p className='form-label'>Apellidos*</p>
//                             <Field type="text" name="lastName" placeholder="Ej. King" className={`form-input `} />
//                             <ErrorMessage name="lastName" component={() => <div className='error'>{errors.lastName}</div>} />
//                         </div>
//                     </div>

//                     <div className='form-input-container'>
//                         <p className='form-label'>Formación*</p>
//                         <Field type="text" name="education" placeholder="Ej. Estudiante / Ingeniero en sistemas" className={`form-input`} />
//                         <ErrorMessage name="education" component={() => <div className='error'>{errors.education}</div>} />
//                     </div>
//                     <div className='form-input-container'>
//                         <p className='form-label'>Experiencia (opcional)</p>
//                         <Field type="text" as="textarea" name="experience" placeholder="Ej. 2 años desarrollando con APIS con Fast API" className={`form-input ${errors.experience ? 'error-input' : ''} form-area`} />

//                         <ErrorMessage name="experience" component={() => <div className='error'>{errors.experience}</div>} />
//                     </div>
//                     <div className='form-input-container'>
//                         <p className='form-label'>Información adicional (opcional)</p>
//                         <Field type="text" as="textarea" name="additionalInfo" placeholder="Ingrese información adicional" className={`form-input ${errors.additionalInfo ? 'error-input' : ''} form-area`} />

//                         <ErrorMessage name="additionalInfo" component={() => <div className='error'>{errors.additionalInfo}</div>} />
//                     </div>
//                     <div className='form-buttons-container'>
//                         <BackButton text="Anterior" />
//                         <div className='inline ml-3'>
//                             <NextButton text="Siguiente" />
//                         </div>
//                     </div>
//                 </Form>
//             )}
//         </Formik>

//     )
// }

import React, { useState } from "react";
import { FormContext } from "../../context/Form-Context";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./UserForm.css";
import axios from "axios"; // Importa Axios para realizar solicitudes HTTP

export const UserForm = () => {
  const body = {
    user_info: {
      name: "John",
      last_name: "Doe",
      email: "johndoe@example.com",
      contact: "0910101010",
      experience: "3 years in backend development at XYZ Company",
      date_of_solicitation: "2022-09-09",
    },
    enterprise_info: {
      name: "Matchworking",
      recipient: "Anthonio Doe",
      position: "Gerente RRHH",
      vacant: "Backend Developer",
      information: "Dedicada al desarrollo de Servicios",
    },
  };

  const [formData, setFormData] = useState({
    name: "",
    last_name: "",
    email: "",
    contact: "",
    experience: "",
    date_of_solicitation: "2024-09-09",

    enterprise_name: "",
    recipient: "",
    position: "",
    vacant: "",
    information: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

    console.log(body);

    try {
      const url = "http://localhost:8000/letter";
      const response = await axios.post(url, body);
      console.log(response.data.content);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="last_name">Apellido:</label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="contact">Contacto:</label>
        <input
          type="text"
          id="contact"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="experience">Experiencia:</label>
        <input
          type="text"
          id="experience"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
        />
      </div>
      {/* <div>
        <label htmlFor="date_of_solicitation">Fecha de Solicitud:</label>
        <input
          type="date"
          id="date_of_solicitation"
          name="date_of_solicitation"
          value={formData.date_of_solicitation}
          onChange={handleChange}
        />
      </div> */}
      <div>
        <label htmlFor="enterprise_name">Nombre de la Empresa:</label>
        <input
          type="text"
          id="enterprise_name"
          name="enterprise_name"
          value={formData.enterprise_name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="recipient">Destinatario:</label>
        <input
          type="text"
          id="recipient"
          name="recipient"
          value={formData.recipient}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="position">Posición:</label>
        <input
          type="text"
          id="position"
          name="position"
          value={formData.position}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="vacant">Vacante:</label>
        <input
          type="text"
          id="vacant"
          name="vacant"
          value={formData.vacant}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="information">Información:</label>
        <input
          type="text"
          id="information"
          name="information"
          value={formData.information}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};
