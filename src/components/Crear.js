import React, { useState } from 'react';
import { guardarStorage } from '../helpers/GuardarLocal';
const Crear = ({ setListadoState }) => {
    const tituloComponente = 'Añadir película';
    //estado del componente recibir la informacion
    const [peliState, setPeliState] = useState({
        titulo: '', descripcion: ''
    });
    //desestrucuturacion del objeto del pelistate
    const { titulo, descripcion } = peliState;

    const consegirDatos = e => {
        //evitar carga de pantalla con el metodo preventfault
        e.preventDefault();
        //conseguir datos del formulario
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        //crear objeto de la pelicula a guardar
        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion
        };
        //guardar estado
        setPeliState({
            peli
        });
        //actualizar el listado del listado princoipal agregando un nuevo elemento
        setListadoState(elements => {
            return [...elements, peli];
        });
        //guarda en local storage

        guardarStorage('peliculas', peli);
        console.log(peli);
    }
    //guarda en local storage

    return (
        <div className="add">
            <h3 className="title">{tituloComponente}</h3>
            <strong>
                {(titulo && descripcion) && 'haz creado la pelicula ' + titulo}
            </strong>
            <form onSubmit={consegirDatos}>
                <input type="text" id="title" placeholder="Titulo" name='titulo' />
                <textarea id="description" placeholder="Descripción" name='descripcion'></textarea>
                <input type="submit" id="save" value="Guardar" />
            </form>
        </div>
    )
}
export default Crear;