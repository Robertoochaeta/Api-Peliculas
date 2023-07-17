import React, {useState} from 'react'

const Pelicula=({datos})=>{
  const [botones,setBotones]= useState("");
    return(
        <>
      
          <div>{datos.titulo} </div> 
        <div>{datos.genero}</div>
        <div>{datos.director}</div>
        <div>{datos.anio}</div>
        <hr></hr>
        <div>
          <button
           disabled={botones}
          onClick={()=>{
            setBotones("disabled");
            alert("Haz comprado esta pelicula")}}>
              Comprar
              </button>

          <button disabled={botones}
          onClick={()=>{
            setBotones("disabled");
          }}>Agregar al carrito</button>
        </div>
        </>
    )
}
export default Pelicula;