import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
    <Menu />
    <Body />

   
</BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

