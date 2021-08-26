import React from 'react';
import ReactDOM from 'react-dom';

import Header from "../components/Header/header";
import Estadistica from '../components/cajaestadistica/cajaestadistica';
import Footer from "../components/footer/footer";



function Cajaestadistica() {
  return (
    <div>
     <Header />
     <Estadistica/> 
     <Footer />

     </div>
  );
}

export default Cajaestadistica;
