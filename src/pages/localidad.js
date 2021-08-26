import React from 'react';
import ReactDOM from 'react-dom';

import Header from "../components/Header/header";
import Cajalocalidades from "../components/cajalocalidades/localidades";
import Footer from "../components/footer/footer";



function localidad() {
  return (
    <div>
     <Header />
     <Cajalocalidades /> 
     <Footer />

     </div>
  );
}

export default localidad;

