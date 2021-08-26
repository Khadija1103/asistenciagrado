import React, { useRef, useEffect, useState } from "react";
import './Edad.css';
import {Link} from 'react-router-dom';
import {db} from '../../firebase'
import {Bar} from 'react-chartjs-2';
import foto2 from '../../Utils/Img/ilustraciones/edad.svg'

function Edad() {
  const [links, setLinks] = useState([]) /*Definimos un arreglo vacío*/
  const dato = {
      rango_16:0,
      rango_20:0,
      rango_25:0,
      rango_30:0,
      rango_35:0,
      rango_40:0,
      rango_45:0,
      rango_50:0,
      rango_mas:0,
      
  }
  const [datos, setDatos] = useState([])
  const [total, setTotal] = useState()
  const values =[] /*Array vacío*/ 
  let promedio=0
  const getLinks = async () => { /*IMPORTANTE*/ 
      db.collection("asistentes").onSnapshot((querySnapshot) => { /*Solicitamos una respuesta a Firebase*/
          const docs = [];
     querySnapshot.forEach ((doc) => {
         docs.push({...doc.data(), id:doc.id});
         let edad = parseInt(doc.data().edad, 10) 
         
         if (edad!==""){
          promedio=promedio+edad
         }
         console.log(promedio)

          if (edad>=0 && edad<=16){
            dato.rango_16+=1
          }
          if (edad>=17 && edad<=20){
            dato.rango_20+=1
          }
          if (edad>=21 && edad<=25){
            dato.rango_25+=1
          } 
          if (edad>=26 && edad<=30){
            dato.rango_30+=1
          }
          if (edad>=31 && edad<=35){
            dato.rango_35+=1
          }
          if (edad>=36 && edad<=40){
            dato.rango_40+=1
          }
          if (edad>=41 && edad<=45){
            dato.rango_45+=1
          }
          if (edad>=46 && edad<=50){
            dato.rango_50+=1
          }
          if (edad>=51){
            dato.rango_mas+=1
          }
     });
     promedio=promedio/docs.length
     console.log(promedio)
     setTotal(promedio)

     setLinks(docs);
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
      labels: ['0-16', '17-20', '21-25', '26-30','31-35', '36-40', '41-45', '46-50', '51-más',  ],
      datasets:[{
          label:'Número de personas conforme a su rango de edad',
          backgroundColor: ['#26B8AF', '#00AA69', '#0088FF', '#26B8AF', '#00AA69', '#0088FF','#26B8AF', '#00AA69', '#0088FF','#26B8AF', ],
          data:datos,  
          color:'red',
          borderColor: 'white',
       
      }]
   };
  const opciones={
      maintainAspectRatio: false, /*Para que nos permita cambiar el tamaño de la gráfica*/
      responsive: true,
      type:'horizontalBar',
   }
   return(
    <div className="ContainerEdad">
      <div className="ContainerBoton1">     
           <p id="frase">
      <div className="BotonesA">
      <Link exact to="/aforo">
                        <button>Aforo</button>
                        </Link>
               </div>
      </p> 
      <p id="frase">
      <div className="BotonesA">
      <Link exact to="/genero">
                        <button>Género</button>
                        </Link>
               </div>
      </p> 
      <p id="frase">
      <div className="BotonesA">
      <Link exact to="/localidad">
                        <button>Localidad</button>
                        </Link>
               </div>
      </p> 
       <p id="frase">
      <div className="BotonesA">
      <Link exact to="/edad">
                        <button>Edad</button>
                        </Link>
               </div>
      </p> 
	  
       </div> 
     <div className="contador">
      {/*<div>{num}</div>*/}
       <h2 id="promedioTittle">Promedio de edad: {Math.floor(total)} años </h2> {/*Para 1 decimal total.toFixed(1). El otro lo redondea hacia abajo. Math.round al redondeado más cercano*/}
     </div> 
     
        <div className="Conjunto">
          <div className="Grafica1">
            <Bar id="grafica" data={data} options={opciones}/> 
        </div>
         <img id="edad_img" src={foto2} alt="Esta es la img de aforo"/>
        </div>
        
    </div>  
)
}
export default Edad

/*export default function Aforo() {
  const [num, setNum] = useState(0);
  const [pause, setPause] = useState(false);
  
  let intervalRef = useRef();
  
  const decreaseNum = () => setNum((prev) => prev + 1);

  useEffect(() => {
    setPause(false);
    intervalRef.current = setInterval(decreaseNum, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);
  
  const handleClick = () => {
    if (!pause) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(decreaseNum, 1000);
    }
    setPause((prev) => !prev);
  };
  
  return (
    <div>
      <div>{num}</div>
      <button onClick={handleClick}>{pause ? "Run" : "Pause"}</button>
    </div>
  );
}*/