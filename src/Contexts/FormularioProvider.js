import React, { useState } from 'react';
import FormularioContext from './FormularioContext';

const FormularioProvider = ({
    children }) => {
        const [dadosDoFormulario, setDadosDoFormulario] = useState( {titulo: '', conteudo: '', capa: ''} );

        return (
            <FormularioContext.Provider value={{ dadosDoFormulario, setDadosDoFormulario }}>
                {children}
            </FormularioContext.Provider>
        );
    };

export default FormularioProvider;