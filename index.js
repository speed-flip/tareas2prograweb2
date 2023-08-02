import Pelicula from "./src/models/pelicula.js";

const peli1 = new Pelicula(1, 'Avengers: Infinity War', 'Hermanos Russo', new Date('2018-04-27'), '2');
const peli2 = new Pelicula(2, 'Avengers: EndGame', 'Hermanos Russo', new Date('2019-04-22'), '3');
const peli3 = new Pelicula(3, 'Avengers: Age of Ultron', 'Joss Whedon', new Date('2015-05-01'), '2');

const peliculas = [peli1, peli2];

// console.log(peliculas);

function buscarPorNombre(nombre) {
  const filterNamed = peliculas.filter(peli => peli.nombre == nombre);
  console.log(filterNamed);
}

function savePelicula(pelicula) {
  peliculas.push(pelicula);
  console.log(peliculas);
}

function buscarMenoresDuracion(duracion) {
  const filterNamed = peliculas.filter(peli => Number(peli.duracion) < duracion);
  if (filterNamed.length < 1) {
    console.log(`No se encontraron peliculas menores con esa duración: ${duracion}`);
  } else {
    console.log(filterNamed);
  }
}

function deleteByIndex(id) {
  if (id > peliculas.length) {
    throw new Error('No se puedo encontrar pelicula con el id proporcionado');
  } else {
    const index = peliculas.findIndex((value) => value.id == id);
    peliculas.splice(index);
    console.log('Estas peliculas estan disponibles ahora');
    console.log(peliculas);
  }

  // console.log(peliculas[id]);
}

// buscarPorNombre('Avengers: Infinity War');
// savePelicula(peli3);
// buscarMenoresDuracion(1);
deleteByIndex(2);
