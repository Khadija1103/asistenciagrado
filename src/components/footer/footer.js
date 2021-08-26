import React from 'react';
import './footer.css';
import Banner1 from '../../Utils/Img/Logos/Futuro.svg'
import Banner2 from '../../Utils/Img/Logos/futuroBlanco.svg'
import Twitter from '../../Utils/Img/Iconos/twitter.svg'
import Facebook from '../../Utils/Img/Iconos/facebook.svg'
import Youtube from '../../Utils/Img/Iconos/youtube.svg'
import Instagram from '../../Utils/Img/Iconos/logo-instagram.svg'
import Barras from '../../Utils/Img/Iconos/barras.svg'
import Home from '../../Utils/Img/Iconos/icons8-home-32.png'
import {Link} from 'react-router-dom';

function Foter() {
  return (
    <div className="Container_Footer">
      <div className="BannerNaranja">
        
          <img id="futuro2" src={Banner2} alt="Esta es la img de futuro" />
          <img id="futuro1" src={Banner1} alt="Esta es la img de futuro" />
        
      </div>
      
      <div className="Pie_pagina">
        <div className="Imagenes">
        <a href="https://twitter.com/KuepaCo"><img id="pieP" src={Twitter} alt="Esta es la img de twitter"/></a>
        <a href="https://www.facebook.com/creandotufuturo.CTF/"><img id="pieP" src={Facebook} alt="Esta es la img de facebook"/></a>
        <a href="https://www.youtube.com/channel/UC2cIGAufqxb1hYla02j-4pA"><img id="PieP" src={Youtube} alt="Esta es la img de youtube"/></a>
        <a href="https://www.instagram.com/creandotufuturo/"><img id="pieP" src={Instagram} alt="Esta es la banner"/></a>
        <Link exact to="/estadistica">
        <img id="pieP" src={Barras} alt="Esta es la banner"/>
                        </Link>
                        <Link exact to="/home">
        <img id="pieP" src={Home} alt="Esta es la banner"/>
                        </Link>
        </div>
        <div className="Textos">
        <p id="frases">
           Copyright © 2021 Kuepa. Todos los derechos reservados. All rights reserved.
        </p>
        <p id="frases">
           Desarrollado por Tatiana Marrugo y Aura Mejía.
        </p>
        </div>
        
      </div>
    </div>
  );
}



export default Foter;



