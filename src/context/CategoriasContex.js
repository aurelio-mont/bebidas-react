import React, { createContext, useState } from 'react';

// crear el context
export const CategoriasContext = createContext();

// provaider donde se ecuntran las funciones y state
const CategotiasProvider = (props) => {
    // crear el state
    const [hola, setHola] = useState('hola');

    return (
        <CategoriasContext.Provider
            value={{
                hola
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    );
}
export default CategotiasProvider;