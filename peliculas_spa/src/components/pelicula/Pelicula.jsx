import React, {useState} from 'react'

const pelicula=({datos})=>{
  const [botones,setbotones]=useState("")
    return(
        <>
        
          <div>{datos.titulo} </div> 
        <div>{datos.genero}</div>
        <div>{datos.director}</div>
        <div>{datos.anio}</div>
        <hr></hr>
        <div>
          <button disabled="" onClick={()=>{
            alert("Haz comprado esta pelicula")}}>
              Comprar
              </button>
          <button disabled="" onClick={()=>{

          }}>Agregar al carrito</button>
        </div>
        </>
    )
}
export default pelicula;