import React, { useEffect, useState } from 'react';

const Buscador = ({ listadoState, setListadoState }) => {

    //crear estado y actualizarlo
    const [busqueda, setBusqueda] = useState('');
    const [noEncontrado, setNoencontrado] = useState(false);
    const buscarPeli = (e) => {
        e.preventDefault();
        //conseguir el listado completo de peliculas
        setBusqueda(e.target.value);
    }

    useEffect(() => {
        //filtrar para buscar conincidencias
        let pelisEncontradas = listadoState.filter(peli => {
            return peli.titulo.toLowerCase().includes(busqueda.toLowerCase());
        });
        //comprobar si hay resultados
        if (busqueda.length <= 1 || pelisEncontradas <= 0) {
            pelisEncontradas = JSON.parse(localStorage.getItem('peliculas'));
            setNoencontrado(true);
        }
        else {
            setNoencontrado(false);
            //en caso de que no, actualizar el estado del listado principal con lo que he lograado filtrar
            setListadoState(pelisEncontradas);
        }

    }, [busqueda, listadoState, setListadoState]);




    return (
        <div className="search">
            <h3 className="title">Buscador:{busqueda}</h3>
            {(noEncontrado && busqueda.length > 1) && (
                <span className='no-encontrado'>No se ha encontrado ninguna conincidencia</span>
            )};

            <form>
                <input type="text" id="search_field" name='busqueda' autoComplete='off' onChange={buscarPeli} />
                <button id="search">Buscar</button>
            </form>
        </div>
    )
}

export default Buscador;
