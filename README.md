## A continuación, se presenta la documentación del código JavaScript de la Tarea Semana 2 de Programación. Se describen las variables, funciones y sus respectivas funcionalidades.

## Variables

### `peli1`, `peli2`, `peli3` (instancias de la clase Pelicula)
- Estas variables son instancias de la clase `Pelicula` que representan películas individuales con sus respectivas propiedades (id, nombre, director, publicacion y duración).

### `peliculas` (array de Pelicula)
- Este array contiene una lista de objetos `Pelicula` y almacena las películas creadas (`peli1` y `peli2`) inicialmente.

## Clase `Pelicula`

```
class Pelicula {
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
```

## Funciones

`buscarPorNombre(nombre)`
- Esta función busca y muestra las películas que coinciden con el nombre proporcionado.
- @param nombre: string. El nombre de la pelicula a buscar


`savePelicula(pelicula)`
- Esta función permite agregar una nueva pelicula al array.
- @param pelicular: Pelicula.

`savePelicula(pelicula)`
- Esta función permite agregar una nueva pelicula al array.
- @param pelicular: Pelicula.

`buscarMenoresDuracion(duracion)`
- Esta función buscar peliculas cuya duracion sea menor al paramentroe `duracion`.
- @param duracion: number.

`deleteByIndex(id)`
- Esta función busca una pelicula por medio del id y lo elimina del arreglo
- @param id: number.


### Hecho por [Victor Torres](https://github.com/vspeed21)
