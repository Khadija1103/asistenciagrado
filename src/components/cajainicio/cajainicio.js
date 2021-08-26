import React from 'react';
import Usuario from "../../Utils/Img/ilustraciones/users.svg";
import {Link} from 'react-router-dom'

import './cajainicio.css';

function Cajainicio() {
  return (
    <div className="cajainicio">
      <div className="usuario">
        <p><h1 id="Tittle">
    ¿Quién eres?</h1></p>
   
      <p>Elige una de las opciones para el ingreso </p>

      <div className="containerbotoninicio">     
           <p id="frase">
        <div className="Botones1">
        <Link exact to="/Acompañante">
                          <button>Acompañante<br></br> Estudiante</button>
                          </Link>
                 </div>
        </p> 
        <p id="frase">
        <div className="Botones1">
        <Link exact to="/invitado">
                          <button>Invitado<br></br>  Externo </button>
                          </Link>
                 </div>
        </p> 
        <p id="frase">
        <div className="Botones1">
        <Link exact to="/administrativo">
                          <button>Administrativos <br></br> Kuepa </button>
                          </Link>
                 </div>
        </p> 
       </div> 

           <img id="img4" src={Usuario} alt="Esta es la ilustración" />
    
    
</div>
</div> 

   
  );
}

export default Cajainicio;