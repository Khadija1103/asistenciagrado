import React from 'react';
import Genero from "../../Utils/Img/ilustraciones/genero.svg";
import Cuadrado1 from "../../Utils/Img/ilustraciones/naran.png";
import Cuadrado2 from "../../Utils/Img/ilustraciones/azul.png";
import Cuadrado3 from "../../Utils/Img/ilustraciones/verde.jpg";
import {Link} from 'react-router-dom';
import './cajagenero.css';
import Cajapie from "../../components/pie/pie";
function Cajagenero() {
  return (
    <div className="cajagenero">
      <div className="usuario">

      <div className="containerbotongenero">     
           <p id="frase">
      <div className="Botonesgenero">
      <Link exact to="/Count">
                        <button>Aforo</button>
                        </Link>
               </div>
      </p> 
      <p id="frase">
      <div className="Botonesgenero">
      <Link exact to="/genero">
                        <button>Género</button>
                        </Link>
               </div>
      </p> 
      <p id="frase">
      <div className="Botonesgenero">
      <Link exact to="/localidad">
                        <button>Localidad</button>
                        </Link>
               </div>
      </p> 
       <p id="frase">
      <div className="Botonesgenero">
      <Link exact to="/edad">
                        <button>Edad</button>
                        </Link>
               </div>
      </p> 
	  
       </div> 
       
    <div className="cajagenero">
    
        <img id="img6" src={Genero} alt="Esta es la img" />
     
   
    
      <Cajapie/>
   
    <p id="pie">Femenina <img id="imgcua1" src={Cuadrado1} alt="Esta es la imgcua"/></p>
    <p id="pie"> Masculino<img id="imgcua" src={Cuadrado2} alt="Esta es la imgcua" /></p>
    <p id="pie"> Otro<img id="imgcua" src={Cuadrado3} alt="Esta es la imgcua" /></p> 
   
  
    
    
      </div>    
    
    
</div>
</div> 

   
  );
}

export default Cajagenero;