
export default class Pelicula {

  id = '';
  nombre = '';
  director = '';
  publicacion = '';
  duracion = '';

  constructor(id, nombre, director, publicacion, duracion) {
    this.id = id;
    this.nombre = nombre;
    this.director = director;
    this.publicacion = publicacion;
    this.duracion = duracion;
  }

}

