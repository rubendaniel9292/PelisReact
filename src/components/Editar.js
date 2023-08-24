import React from 'react';

const Editar = ({ peli, conseguirPeliculas, setEditar, setListadoState }) => {
    const guardarEdicion = (e, id) => {
        e.preventDefault();
        //conseguir el target del evento
        let target = e.target;
        //buscar el indice del obetjo de la pelicula a actualizar
        const pelisAlmacenadas = conseguirPeliculas();
        const index = pelisAlmacenadas.findIndex(peli => peli.id === id);//se filta si peli id es igual al id de la pelicula que quiero actulizar
        //crear ovbeto con ese id de ese idice
        let peliActualizada = {
            id, titulo: target.titulo.value, descripcion: target.descripcion.value
        }
        //actualizar el elelmento con ese indice
        pelisAlmacenadas[index] = peliActualizada;
        //cuardar el nuevo array de objetos en el localstorge
        localStorage.setItem('peliculas', JSON.stringify(pelisAlmacenadas));
        //y actualizar estados
        setListadoState(pelisAlmacenadas);
        setEditar(0);//Si editar es 0, significa que el componente está mostrando la vista normal y no el formulario de edición. 
        //Si editar es 1, significa que el componente está mostrando el formulario de edición.

    }

    const tituloComponente = 'Editar película';
    return (
        <div className='edit_form'>
            <h3 className='title'>{tituloComponente}</h3>
            <form onSubmit={e => guardarEdicion(e, peli.id)}>
                <input type='text' name='titulo' className='titulo_editado' defaultValue={peli.titulo} />
                <textarea name='descripcion' defaultValue={peli.descripcion} className='desscripcion_editada'></textarea>
                <input type='submit' className='editar' value='Actualizar' />
            </form>
        </div>
    )
}

export default Editar;
