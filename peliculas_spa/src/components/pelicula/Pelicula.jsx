import React from 'react'

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
            
         {peliculas.map((peliculas)=>(
             <>
             <div>{peliculas.titulo}</div>
            <div>{peliculas.genero}</div>
            <div>{peliculas.director}</div>
            <div>{peliculas.anio}</div>
            <hr/>
      </>
      
         ))}
       
    
        </>
        
    );
}
export default Peliculas;