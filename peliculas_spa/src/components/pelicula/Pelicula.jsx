import React from 'react'

const pelicula=(props)=>{
    return(
        <>
        
          <div>{props.datos.titulo} </div> 
        <div>{props.datos.genero}</div>
        <div>{props.datos.director}</div>
        <div>{props.datos.anio}</div>
        <hr></hr>
        </>
    )
}
export default pelicula;