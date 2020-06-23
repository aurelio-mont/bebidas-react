import React, { useContext, useState } from 'react';
import { CategoriasContext } from '../context/CategoriasContex';

const Formulario = () => {
    const [busquda, setBusqueda] = useState({
        nombre: '',
        categoria: ''
    });

    const { categorias } = useContext(CategoriasContext)
    
    // Funcion para leer los contenidos
    const getDatosBusqueda = e => {
        setBusqueda({
            ...busquda,
            [e.target.name] : e.target.value
        })
    } 

    return ( 
        <form
            className="col-12"
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por Categoría o Ingrediente</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por ingredinete"
                        onChange={getDatosBusqueda}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                        onChange={getDatosBusqueda}
                    >
                        <option value="">--- Selecciona Categoría</option>
                        {categorias.map(categoria => (
                            <option key={categoria.strCategory} value={categoria.strCategory} >
                                {categoria.strCategory}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar Bebida"
                    />
                </div>
            </div>
        </form>
     );
}
 
export default Formulario;