import React, {useEffect, useState} from 'react'; /*Import React*/ 
import Admin from "./Admin";
import db from '../firebase'


const Links = () => {
    const {links, setLinks} = useState([]) /*Definimos un arreglo vacío*/

    const  addOrEditLink = async (linkObject) => {
        await db.collection('links').doc().set(linkObject);/*Voy a crear un conjunto de datos llamados links*/
        console.log  ('new task added') 
        }

        const getLinks = async () => { /*IMPORTANTE*/ 
            db.collection("links").onSnapshot((querySnapsoht) => { /*Solicitamos una respuesta a Firebase*/
                const docs = [];
           querySnapshot.forEach ((doc) => {
               docs.push({...doc.data(), id:doc.id});
           });
           setLinks(docs);
        });
        };

        useEffect(() => {
            getLinks();
        }, []);
        
    return <div>
        <Admin addOrEditLink={addOrEditLink} />
        {links.mal(link => {

        })}
    </div>;
}
export default Links;