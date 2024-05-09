import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./UserForm.css";
import axios from "axios";

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
    user_info: {
      name: "",
      last_name: "",
      email: "",
      contact: "",
      experience: "",
      date_of_solicitation: "2024-09-09",
    },
    enterprise_info: {
      name: "",
      recipient: "",
      position: "",
      vacant: "",
      information: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      user_info: {
        ...prevData.user_info,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(body);

    console.log(formData);

    try {
      const response = await axios.post(
        "http://localhost:8000/letter",
        formData
      );
      console.log("Formulario enviado:", formData);

      console.log("Respuesta del servidor:", response.data.content);

      setResponse(response.data.content);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    } finally {
      setLoading(false); // Cambiar el estado de loading a false independientemente del resultado
    }
  };

  const [response, setResponse] = useState("");

  const [loading, setLoading] = useState(false);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.user_info.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="last_name">Apellido:</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={formData.user_info.last_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.user_info.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="contact">Contacto:</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.user_info.contact}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="experience">Experiencia:</label>
          <input
            type="text"
            id="experience"
            name="experience"
            value={formData.user_info.experience}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="enterprise_name">Nombre de la Empresa:</label>
          <input
            type="text"
            id="enterprise_name"
            name="enterprise_name"
            value={formData.enterprise_info.name}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                enterprise_info: {
                  ...prevData.enterprise_info,
                  name: e.target.value,
                },
              }))
            }
          />
        </div>
        <div>
          <label htmlFor="recipient">Destinatario:</label>
          <input
            type="text"
            id="recipient"
            name="recipient"
            value={formData.enterprise_info.recipient}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                enterprise_info: {
                  ...prevData.enterprise_info,
                  recipient: e.target.value,
                },
              }))
            }
          />
        </div>
        <div>
          <label htmlFor="position">Posición:</label>
          <input
            type="text"
            id="position"
            name="position"
            value={formData.enterprise_info.position}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                enterprise_info: {
                  ...prevData.enterprise_info,
                  position: e.target.value,
                },
              }))
            }
          />
        </div>
        <div>
          <label htmlFor="vacant">Vacante:</label>
          <input
            type="text"
            id="vacant"
            name="vacant"
            value={formData.enterprise_info.vacant}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                enterprise_info: {
                  ...prevData.enterprise_info,
                  vacant: e.target.value,
                },
              }))
            }
          />
        </div>
        <div>
          <label htmlFor="information">Información:</label>
          <input
            type="text"
            id="information"
            name="information"
            value={formData.enterprise_info.information}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                enterprise_info: {
                  ...prevData.enterprise_info,
                  information: e.target.value,
                },
              }))
            }
          />
        </div>
        <button type="submit">Enviar</button>
      </form>

      {loading ? <p>Enviando formulario...</p> : response && <p>{response}</p>}
    </>
  );
};
