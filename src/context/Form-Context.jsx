/* eslint-disable react/prop-types */
import React from "react";
const FormContext = React.createContext();

function FormProvider({ children }) {

    const [userForm, setUserForm] = React.useState({
        name: '',
        lastName: '',
        education: '',
        experience: '',
        additionalInfo: '',
    })

    const [companyForm, setCompanyForm] = React.useState({
        name: '',
        appliedPosition: '',
        recipient: '',
        recipientPosition: '',
    })

    const [globalForm, setGlobalForm] = React.useState({
        name: '',
        lastName: '',
        education: '',
        experience: '',
        additionalInfo: '',
        company: '',
        appliedPosition: '',
        recipient: '',
        recipientPosition: '',
        companyInfo: ''
    })

    const updateGlobalForm = (data) => {
        setGlobalForm((prevData) => ({
            ...prevData,
            ...data,
        }));
    };

    return (
        <FormContext.Provider value={{ userForm, setUserForm, companyForm, setCompanyForm, globalForm, setGlobalForm, updateGlobalForm }}>
            {children}
        </FormContext.Provider>
    );
}

export { FormContext, FormProvider }