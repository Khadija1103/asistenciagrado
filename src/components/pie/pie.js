import React, { useEffect, useState } from 'react';
import './cajapie.css';
import {Pie} from'react-chartjs-2';
import {db} from '../../firebase'


function Cajapie() {

  const [links, setLinks] = useState([]) 
  const dato = {
        Femenino:0,
        hombre:0,
        otro:0,
      
        
    }

    const [datos, setDatos] = useState([])
    const values =[] 
    const getLinks = async () => { 
        db.collection("asistentes").onSnapshot((querySnapshot) => { 
            const docs = [];
       querySnapshot.forEach ((doc) => {
           docs.push({...doc.data(), id:doc.id});
           console.log(doc.data().genero)
            dato[doc.data().genero]+=1 
       });
       setLinks(docs);
       console.log(dato.otro)
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
        datasets:[{
        label:'',
        backgroundColor:['#FF3A01', 'blue', 'green'],
        data:datos,  
        }]

        
      };

const opciones={
    responsive:true
}
  return (
   
<div className="cajapie">
  <Pie data={data} options={opciones}/>
</div>
 
   
  );
}

export default Cajapie;