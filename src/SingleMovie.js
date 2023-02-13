import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './context'

const SingleMovie = () => {

  const {id}=useParams()
  const {movie,setMovie}=useState({})
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState({show:false,msg:''})

// fetchMovie--------------------------------------
const fetchMovie=async(url)=>{
const response=await fetch(url)
const data=await response.json()
console.log({dataMove:data})

if(data.Response ==='False'){
setError({show:true,msg:data.Error})
setLoading(false)
}else{
  console.log("asasc")
  setMovie(data)
  setLoading(false)
}
}
// useEffect---------------------------------------
useEffect(()=>{

  fetchMovie(`${API_ENDPOINT}&i=${id}`)
// &i= :id
},[id])

// loading-------------------------------------
if(loading){
  return <div className="loading"></div>
}
//error-------------------------------------

if(error.show){
  return <div className="error">
    <h1>{error.msg}</h1>
    <Link to="/" className="btn">back to movies</Link>
  </div>
}
console.log({movie})
const {Year:year,Plot:plot,Title:title,Poster:poster}=movie
// return---------------------------------------
  return <section className="single-movie">
<img src={poster} alt={title} />
<div className="single-movie-info">
  <h2>{title}</h2>
  <p>{plot}</p>
  <h4>{year}</h4>
  <Link to="/" className="btn">back to movies</Link>
</div>
  </section>
}

export default SingleMovie
