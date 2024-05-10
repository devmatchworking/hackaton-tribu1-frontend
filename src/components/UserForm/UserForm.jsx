import { Loader } from "rsuite";
import React, { useState } from "react";
import "./UserForm.css";
import axios from "axios";
import { ResponseComponent } from "../ResponseComponent/ResponseComponent";

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

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({}); // Limpiar los errores antes de la validación

    const requiredFields = [
      "name",
      "last_name",
      "email",
      "contact",
      "experience",
      "name", // Este campo parece estar duplicado, asegúrate de eliminar uno de ellos si es necesario
    ];
    const errors = {};
    requiredFields.forEach((field) => {
      if (
        !formData.user_info[field] ||
        formData.user_info[field].trim() === ""
      ) {
        errors[field] = "Este campo es obligatorio";
      }
    });

    if (Object.keys(errors).length > 0) {
      setErrors(errors); // Establecer los errores si hay campos obligatorios faltantes
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "https://prueba3-pofc.onrender.com/letter",
        formData
      );

      setResponse(response.data.content);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-input-container">
          <label className="form-label" htmlFor="name">
            Nombre:
          </label>
          <input
            className="form-input"
            type="text"
            id="name"
            name="name"
            value={formData.user_info.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-input-container">
          <label className="form-label" htmlFor="last_name">
            Apellido:
          </label>
          <input
            className="form-input"
            type="text"
            id="last_name"
            name="last_name"
            value={formData.user_info.last_name}
            onChange={handleChange}
          />
        </div>
        <div className="form-input-container">
          <label className="form-label" htmlFor="email">
            Correo Electrónico:
          </label>
          <input
            className="form-input"
            type="email"
            id="email"
            name="email"
            value={formData.user_info.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-input-container">
          <label className="form-label" htmlFor="contact">
            Contacto:
          </label>
          <input
            className="form-input"
            type="text"
            id="contact"
            name="contact"
            value={formData.user_info.contact}
            onChange={handleChange}
          />
        </div>
        <div className="form-input-container">
          <label className="form-label" htmlFor="experience">
            Experiencia:
          </label>
          <input
            className="form-input"
            type="text"
            id="experience"
            name="experience"
            value={formData.user_info.experience}
            onChange={handleChange}
          />
        </div>
        <div className="form-input-container">
          <label className="form-label" htmlFor="enterprise_name">
            Nombre de la Empresa:
          </label>
          <input
            className="form-input"
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
        <div className="form-input-container">
          <label className="form-label" htmlFor="recipient">
            Destinatario:
          </label>
          <input
            className="form-input"
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
        <div className="form-input-container">
          <label className="form-label" htmlFor="position">
            Posición:
          </label>
          <input
            className="form-input"
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
        <div className="form-input-container">
          <label className="form-label" htmlFor="vacant">
            Vacante:
          </label>
          <input
            className="form-input"
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
        <div className="form-input-container">
          <label className="form-label" htmlFor="information">
            Información:
          </label>
          <input
            className="form-input"
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
        <button className="form-buttons-container" type="submit">
          Enviar
        </button>
      </form>

      {loading ? (
        <Loader speed="slow" size="md" content="Loading..." />
      ) : (
        response && (
          <p className="mt-5 border border-blueberry p-2 min-w-full h-fit">
            {response}
          </p>
        )
      )}
    </>
  );
};
