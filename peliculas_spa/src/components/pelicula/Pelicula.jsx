import React from 'react'

const pelicula=({datos})=>{
    return(
        <>
        
          <div>{datos.titulo} </div> 
        <div>{datos.genero}</div>
        <div>{datos.director}</div>
        <div>{datos.anio}</div>
        <hr></hr>
        </>
    )
}
export default pelicula;