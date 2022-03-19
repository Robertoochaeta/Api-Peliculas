import React from 'react'
import Pelicula from './pelicula';
const Peliculas=()=>{
    const peliculas=[
        {
            titulo: 'Terminator',
            genero: 'Acción',
            director: 'James Cameron',
            anio: '1996'
        
        },
        {
            titulo: 'Batman the Dark Knight',
            genero: 'Super Heroes',
            director: 'Chrisfer Nolan',
            anio: '2008'
        
        },
        {
            titulo: 'Avengers',
            genero: 'Super Heroes',
            director: 'Roberto Ochaeta',
            anio: '2012'
        
        },

    ]

    
    return(
        <>
        <div>

            <h2>Peliculas</h2>
        </div>

     
     <div>Peliculas contenido</div>
            
         {peliculas.map((pelicula)=>(
             
            <Pelicula datos={pelicula}></Pelicula>
    
      
         ))}
       
    
        </>
        
    );
}
export default Peliculas;