import React from "react";
import { UserForm } from "../../components/UserForm/UserForm";
import { Menu } from "../../components/MenuComponent/Menu";
import { FormContext, FormProvider } from "../../context/Form-Context";
import DownloadComponent from "../../components/DownloadComponent/DownloadComponent";
import "./UserFormPage.css";
export const UserFormPage = () => {
  return (
    <FormProvider>
      <div className="form-page">
        <div className="menu-container">
          <Menu />
        </div>
        <div className="form-container">
          <h1 className="text-[2rem] font-bold text-black">
            Creador de carta de motivación
          </h1>
          <p className="text-[1.2rem]">
            Para continuar, necesitamos que llenes la siguiente información
          </p>
          <UserForm />
          <DownloadComponent />
        </div>
      </div>
    </FormProvider>
  );
};
