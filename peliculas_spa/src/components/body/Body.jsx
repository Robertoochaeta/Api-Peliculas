import React from 'react'
import { Route } from 'react-router-dom';
import Peliculas from '../pelicula/Peliculas';
import Favorito from '../favorito/Favorito';
import Carrito from '../carrito/Carrito';
import Buscar from '../pelicula/buscar';
import destacada from '../pelicula/destacada';
const Body = () => {
  return (
     <div>
       <Route path="/" exact component={Peliculas}></Route>
       <Route path="/peliculas" exact component={Peliculas}></Route>
       <Route path="/favoritos" exact component={Favorito}></Route>
       <Route path="/carrito" exact component={Carrito}></Route>
     <Route path="/destacada" exact component={destacada}></Route>
      <Route path='/buscar' exact component={Buscar}></Route> 
      
     </div>
  );
};

export default Body;