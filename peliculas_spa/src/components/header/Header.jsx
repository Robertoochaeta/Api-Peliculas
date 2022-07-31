import React from 'react'
import {Link} from 'react-router-dom';
const Header = () => {
  return(
   <>
   <div>HEADER</div>
   <br />
  <Link to="/favoritos">Favoritos</Link>
  <br />

  <Link to="/carrito">Carrito</Link>
   </>
  )
}

export default Header;