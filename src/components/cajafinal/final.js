import React from 'react';
import {Link} from 'react-router-dom'
import './cajafinal.css';

function Cajafinal() {
  return (
    <div className="cajafinal"> 

                <div className="Boxfinal"> 
				<p id="textfinal">
                          Gracias por su respuestas,<br>
                          </br> disfrute del evento.

                       </p>
                       <p id="frasefinal">
        <div className="Botones9">
        <Link exact to="/home">
                          <button>Volver al inicio</button>
                          </Link>
                 </div>
        </p> 
</div>
</div>
   
  );
}

export default Cajafinal;