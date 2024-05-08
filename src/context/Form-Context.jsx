import React from "react";

const FormContext = React.createContext();

function FormProvider({ children }) {

    

    return (
        <FormContext.Provider value={{}}>
            {children}
        </FormContext.Provider>
    );
}

export { FormContext, FormProvider }