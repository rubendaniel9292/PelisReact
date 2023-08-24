import React, { useState, useEffect } from 'react';
import Editar from './Editar';

//recibe las dos props mediante desestructuracion

const Listado = ({ listadoState, setListadoState }) => {
  //crear estsado para mostrar por pantalla el aray de objetos
  const [editar, setEditar] = useState(0);
  //utilizar el hook  useeffect para ejecutar el metodo conseguirPelis apenas se cargue el componente
  useEffect(() => {
    conseguirPeliculas();
    console.log('Componente del listado cargado correctamente');
  }, []);//se caragara una sola vez, por eso los []

  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem('peliculas')) || [];//consigue el listado de peliculas o el array vacio enc caso de no haber nada
    console.log(peliculas);
    setListadoState(peliculas);
    return peliculas;
  }

  const borrarPeli = (id) => {
    //obtener peliculas almacenadas
    let pelisAlmacenadas = conseguirPeliculas();
    //filtrar esas peliculas para que elimine del array la que no quiero
    //flitra las pelis cuyo id sea distinto al que se le pasa por parametro para eliminar
    let nuevoArraryPelis = pelisAlmacenadas.filter(peli => peli.id !== parseInt(id));
    //actulizar el estado 
    setListadoState(nuevoArraryPelis);
    //actualizar los datos del localstograge
    localStorage.setItem('peliculas', JSON.stringify(nuevoArraryPelis));

  }

  return (
    <>
      {//validar si el estado no esta vacion
        listadoState !== null ?
          listadoState.map(peli => {
            return (<article key={peli.id} className="peli-item">
              <h3 className="title">{peli.titulo}</h3>
              <p className="description">{peli.descripcion}</p>

              <button className="edit" onClick={() => { setEditar(peli.id) }}>Editar</button>
              <button className="delete" onClick={() => { borrarPeli(peli.id) }}>Borrar</button>
              {
                editar === peli.id && (<Editar peli={peli}
                  conseguirPeliculas={conseguirPeliculas} setEditar={setEditar} setListadoState={setListadoState} />)
              }
            </article>)
          }) : <h2>No hay peliculas para mostrar</h2>
      }

    </>
  )
}

export default Listado;

