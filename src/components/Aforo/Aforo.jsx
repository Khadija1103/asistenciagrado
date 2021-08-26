import React, { useEffect, useState } from 'react';
import './Aforo.css';
import {db} from '../../firebase'
import {Bar} from 'react-chartjs-2';
import {Link} from 'react-router-dom';
import foto1 from '../../Utils/Img/ilustraciones/aforo.svg'

function Count() {
    const [links, setLinks] = useState([]) /*Definimos un arreglo vacío*/
    const dato = {
        graduando:0,
        acompanante:0,
        invitado:0,
        administrativo:0,
        
    }
    const [datos, setDatos] = useState([])
    const values =[] /*Array vacío*/ 
    const getLinks = async () => { /*IMPORTANTE*/ 
        db.collection("asistentes").onSnapshot((querySnapshot) => { /*Solicitamos una respuesta a Firebase*/
            const docs = [];
       querySnapshot.forEach ((doc) => {
           docs.push({...doc.data(), id:doc.id});
           console.log(doc.data().rol)
            dato[doc.data().rol]+=1 /*El valor que ya está más 1*/ /*HACER CONDICIÓN*/ 
       });
       setLinks(docs);
       console.log(dato.invitado)
       for(let usuario in dato){
           values.push(dato[usuario])
       }
       setDatos(values)
    });
    };

    useEffect( ()=>{
        getLinks()
        console.log(dato)
        console.log(values)
    }, [])

    const data={
        labels: ['Graduandos', 'Acompañantes', 'Invitados','Administrativos'],
        datasets:[{
            label:'Asistentes',
            backgroundColor: ['#EDA083', '#0088FF', '#3DE9A7', '#968DFF'],
            data:datos,  
        }]
     };
    const opciones={
        maintainAspectRatio: false, /*Para que nos permita cambiar el tamaño de la gráfica*/
        responsive: true,
        type:'horizontalBar',
        indexAxis:'y',
        fontSize:'59px',
     }


    return(
        <div className="ContainerAforo">
            <div className="ContainerBoton2">     
           <p id="frase1">
      <div className="BotonesA">
      <Link exact to="/aforo">
                        <button>Aforo</button>
                        </Link>
               </div>
      </p> 
      <p id="frase1">
      <div className="BotonesA">
      <Link exact to="/genero">
                        <button>Género</button>
                        </Link>
               </div>
      </p> 
      <p id="frase1">
      <div className="BotonesA">
      <Link exact to="/localidad">
                        <button>Localidad</button>
                        </Link>
               </div>
      </p> 
       <p id="frase1">
      <div className="BotonesA">
      <Link exact to="/edad">
                        <button>Edad</button>
                        </Link>
               </div>
      </p> 
	  
       </div>
            
            <div className="contador"><h2>Somos {links?.length} personas </h2></div>
            <div className="Contenedor_grafica_ilustracion">
                <div className="Grafica">
                    <Bar id="grafica" data={data} options={opciones}/> 
                 </div>
                   <img id="aforo_img" src={foto1} alt="Esta es la img de aforo"/> 
            </div>
            
        
        
        </div> 
    )
    
}
export default Count
