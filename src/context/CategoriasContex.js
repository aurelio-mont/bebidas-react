import React, { createContext, useState, useEffect } from 'react';
import Axios from 'axios';

// crear el context
export const CategoriasContext = createContext();

// provaider donde se ecuntran las funciones y state
const CategotiasProvider = (props) => {
    // crear el state
    const [categorias, setCategorias] = useState([]);

    // Ejecutar llamado a la api
    useEffect(() => {
        const getCategorias = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const categorias = await Axios.get(url);
            setCategorias(categorias.data.drinks);
        }
        getCategorias();
    }, []);

    return (
        <CategoriasContext.Provider
            value={{
                categorias 
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    );
}
export default CategotiasProvider;