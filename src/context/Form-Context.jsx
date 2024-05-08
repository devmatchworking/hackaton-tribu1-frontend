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

    return (
        <FormContext.Provider value={{userForm, setUserForm, companyForm, setCompanyForm}}>
            {children}
        </FormContext.Provider>
    );
}

export { FormContext, FormProvider }