export const guardarStorage = (key, element) => {
    //conseguir los elementos del localsrotage
    let items = JSON.parse(localStorage.getItem(key));
    //comprobar si es array caso contrario crear el array
    if (Array.isArray(items)) {
        //añadir un elemento en el array el elemento
        items.push(element);
    } else {
        //crear un array con la pelicula nueva
        items = [element];
    }
    //guarda en local storage el array de item o pelis
    localStorage.setItem(key, JSON.stringify(items));//convertir un objeto u array en un JSON
    //devolver ogjeto
    return element;
}