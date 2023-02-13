import React from 'react'
import { useGlobalContext } from './context'
const SearchForm = () => {
  //  عشان لو مفيش نتايج رجعت Error,setError و ال  input لألبحث في ال ,setQuery query  هنحط هنا ال 
  const {query,setQuery,error}=useGlobalContext()


  return <form className="search-form" onSubmit={(e)=>e.preventDefault()}>
    <h2>search movies</h2>
    <input type="text" className="form-input"  value={query} onChange={(e)=>setQuery(e.target.value)}/>
  {error.show&&<div className="error">{error.msg}</div>}
  </form>
}

export default SearchForm
