import React from 'react';
import Botones from "../../Utils/Img/ilustraciones/botones.svg";
import {Link} from 'react-router-dom';

import './cajaestadiscica.css';


function Cajaestadistica() {
  return (
  
    <div className="cajaestadistica">
      <div className="Container_imgtm">
        <img id="imgtm" src={Botones} alt="Esta es la img" />
      </div>
      <div className="Contenidoestadistica">
        <p><h1 id="Tittleestadis">
        ¿Quiénes somos?
        </h1>
        </p>
        <p id="fraseestadis">
        Bienvenidos a nuestro live de estadísticas
        </p>
        <p>Selecciona una de nuestras opciones</p><br></br>
         
  <div >     
         <p>
      <div className="Botones">
      <Link exact to="/Count">
                        <button>Aforo</button>
                        </Link>
               </div>
      </p> 
      <p id="frase">
      <div className="Botones">
      <Link exact to="/genero">
                        <button>Género</button>
                        </Link>
               </div>
      </p> 
      <p id="frase">
      <div className="Botones">
      <Link exact to="/localidad">
                        <button>Localidad</button>
                        </Link>
               </div>
      </p> 
       <p id="frase">
      <div className="Botones">
      <Link exact to="/Edad">
                        <button>Edad</button>
                        </Link>
               </div>
      </p> 
     </div> 
</div>
</div> 
  

  );
}


export default Cajaestadistica;

