import React, { useState } from 'react';
import { FormProvider } from '../../context/Form-Context';
import { Menu } from '../MenuComponent/Menu';
import { UserForm } from '../UserForm/UserForm';
import { BackButton } from '../../shared/BackButton/BackButton';
import { NextButton } from '../../shared/NextButton/NextButton';
import { CompanyForm } from '../CompanyForm/CompanyForm';
import DownloadComponent from '../DownloadComponent/DownloadComponent';

const GlobalForm = () => {
    const [parte, setParte] = useState(1);
    
    const handleNext = () => {
        setParte(Math.min(3, parte + 1));
    };

    const handlePrev = () => {
        setParte(Math.max(parte - 1, 0));
    };

    return (
        <div className='form-page'>
            <div className='menu-container'>
                <Menu parte={parte} />
            </div>
            {parte === 1 && (
                <>
                    <FormProvider>
                        <div className='form-container'>
                            <h1 className='text-[1.75rem] font-bold'>Información Personal</h1>
                            <p>Para continuar, necesitamos que rellenes la siguiente información</p>
                            <UserForm />
                            <div className='form-buttons-container'>
                                <BackButton text="Anterior" parte={parte} onClick={handlePrev} />
                                <div className='inline ml-3'>
                                    <NextButton onClick={handleNext} text="Siguiente" parte={parte} />
                                </div>
                            </div>

                        </div>
                    </FormProvider>
                </>

            )}

            {parte === 2 && (
                <>
                    <FormProvider>
                        <div className='form-container'>
                            <h1 className='text-[1.75rem] font-bold'>Información de la Empresa</h1>
                            <p>Para continuar, necesitamos que rellenes la siguiente información</p>
                            <CompanyForm />
                            <div className='form-buttons-container'>
                                <BackButton text="Anterior" parte={parte} onClick={handlePrev} />
                                <div className='inline ml-3'>
                                    <NextButton onClick={handleNext} text="Siguiente" parte={parte} />
                                </div>
                            </div>

                        </div>
                    </FormProvider>
                </>
            )}

            {parte === 3 && (
                <>
                <div className='form-container'>
                            <h1 className='text-[1.75rem] font-bold'>Carta de Motivación</h1>
                            <p>Esta es la carta de recomendación que realizamos para ti</p>
                            <DownloadComponent/>
                            <div className='form-buttons-container'>
                                <BackButton text="Anterior" parte={parte} onClick={handlePrev}/>
                                <div className='inline ml-3'>
                                    <NextButton onClick={handleNext} text="Guardar" parte={parte} />
                                </div>
                            </div>

                        </div>
                </>

            )}
        </div>
    );
};

export default GlobalForm;
