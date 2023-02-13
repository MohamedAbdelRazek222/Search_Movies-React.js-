import React from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movies = () => {
  const {movies,isLoading}=useGlobalContext()

if(isLoading){
  return <div className="loading"></div>
}
  return <div className="movies">
    {movies.map((movie)=>{
// console.log({movie})
const {imdbID:id,Year:year,Type:type,Title:title,Poster:poster}=movie
return <Link to={`/movies/${id}`} key={id} className="movie">
  <article>
<img src={poster === 'N/A'?url:poster} alt="title" />
<div className="movie-info">
  <h4 className="title">{title}</h4>
  <p >{year}</p>
</div>
  </article>
</Link>


    })}
  </div>
}

export default Movies
