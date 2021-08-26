import React from 'react';
import ReactDOM from 'react-dom';

import Header from "../components/Header/header";
import Count from '../components/Aforo/Aforo';
import Footer from "../components/footer/footer";



function AforoUser() {
  return (
    <div>
     <Header />
     <Count/> 
     <Footer />

     </div>
  );
}

export default AforoUser;