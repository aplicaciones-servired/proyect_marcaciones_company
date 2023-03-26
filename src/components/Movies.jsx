function ListOfMovies ({ movies }) {
  // Todo: Esta atado a como funciona la API
  return (
    <ul>
      {
        movies.map(movie => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={movie.title} />
          </li>
        ))
      }
    </ul>
  )
}

function NoMoviesResults () {
  return <p>No hay Resultados</p>
}

export function Movies ({ movies }) {
  const hasMovies = movies.length > 0

  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoMoviesResults />
  )
}