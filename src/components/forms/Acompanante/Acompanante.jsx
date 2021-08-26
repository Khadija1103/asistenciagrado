import React, {useState} from "react" /*import react y crear el estado de la aplicación que pertenece a un componente*/ 
import '../css/Acompanante.css'/*Import the styles*/
import { db } from "../../../firebase"
import {Link} from 'react-router-dom'

const Acompanante = (props) => { /*Traer de link*/

    const initialSateValues = { /*Guardar todo en una constante con valores iniciales*/
        nombre:'',
        nombre_estudiante:'',
        parentesco:'',
        tel: '',
        apellido: '',
        edad:'',
        localidad:'',
        genero:'',
        sintomas:false,
        rol:'acompanante',
    };

    const initialValue = {
        certify1:false,
        certify2: false,
    
    }

    const [checked, setChecked] = useState(initialValue)

    const [values, setValues] = useState(initialSateValues) /*Definir el estado desde React, el set adquiere su nombre por el valor actual de la función*/

    const handleInputChange = e => { /*Captura los datos*/
        const {name,value} = e.target; /*Me va a mostrar esos campos específicos dentro de llaves*/
        setValues({...values, [name]: value}) /*Copie lo que actualmente tiene y con el input que está actualizando coloca ese input*/   
    }
    const handleChange = e => {
        const {name} = e.target 
            if (name==="certify1"){
                setChecked({
                    certify1:true,
                    certify2:false,
                 }) 
                 setValues({
                     ...values, 
                     sintomas:true,
                 })
                
            }
            if (name==="certify2"){
                setChecked({
                    certify1:false,
                    certify2:true,
                 }) 
                 setValues({
                     ...values, 
                     sintomas:false,
                 })
            }
    }

    const handleSubmit = e => { 
        e.preventDefault();
        db.collection('asistentes').doc().set(values) /*Envia los datos a la base de datos*/
        .then(res => { 
            setChecked(initialValue)
            setValues(initialSateValues)
            window.location.replace("/cajafinal") /*Me voy a una redirección*/
            /*alert("Respuesta enviada")*/
        }) /*Si no res ()*/
        .catch(err =>{ /*En caso de error*/
            alert("Fallo")
        })
        /*props.addOrEditLink(values);
        setValues({...initialSateValues})/*Guarda los datos y los devuelve al estado inicial a través del value en el input*/
    }
    return (
        <div className="Container_Acompanante"> 

                <div className="BoxAcompanante"> 
                    <h1>
                        Acompañante estudiante
                    </h1>

                    <form action="" onSubmit={handleSubmit}>
                        <p>
                        <input list="browsers" name="nombre_estudiante" id="nombre_estudiante" onChange={handleInputChange} value={values.nombre_estudiante} placeholder="Nombre del estudiante" required/>
                           <datalist id="browsers">
                               <option value="Adriana Marcela Chavez Salinas"/>
                               <option value="Angie Natalia Forero Bernal"/>
                               <option value="Aura Sofía Mejía Ruiz"/>
                               <option value="Katerin Alejandra Galindo Ruiz"/>
                               <option value="Laura Tatiana Celis Ballesteros"/>
                                <option value="Leidy Johanna Roa lozano"/>
                                <option value="María Alexandra Bulla Arenas"/>
                               <option value="María Sofía de Los Ángeles Reyes Rubiano "/>
                               <option value="Paola Andrea Forero Bernal"/>
                               <option value="Aida Gineth Garzón Bejarano"/>
                               <option value="Angie Marcela Reyes Vaca "/>
                                <option value="Blanca Cecilia Castañeda Fonseca"/>
                                <option value="Diana Carolina Gutiérrez Loaiza"/>
                                <option value="Diana Patricia Chavez Realpe"/>
                                <option value="Diana Viviana Garcia Fonseca"/>
                                <option value="Elena Patricia Gonzalez Velasquez"/>
                                <option value="Ingrid Tatiana Paba Guillén"/>
                                <option value="Katherine Melissa Urrego Cuartas"/>
                                <option value="Laura Yaneth Vargas Torres"/>
                                <option value="María Camila León  "/>
                                <option value="María Paula Vargas Torres"/>
                                <option value="Martha Carolina Ordóñez "/>
                                <option value="Tatiana Marrugo Jimenez"/>
                                <option value="Valeria Hostos Alvarez"/>
                                <option value="Yuli Viviana Reyes Muñoz"/>
                                <option value="Yuly Marcela Beltrán Rodríguez"/>
                                <option value="Yuri Alejandra Herrera Pérez"/>
                                <option value="Ana Briyid Cárdenas Bejarano"/>
                                <option value="Dennis Yuliana Arango Sánchez"/>
                                <option value="Diana Carolina Londoño Cubillos "/>
                                <option value="Geraldine Nicold Molina Avila"/>
                                <option value="Jahaira Camila Cortés González"/>
                                <option value="Jeimy Alejandra López Martínez"/>
                                <option value="Karen Michel Piñeros Mora"/>
                                <option value="Katerin Melissa Torres Salazar"/>
                                <option value="Leidy Dayana Castro Fajardo"/>
                                <option value="Maria Fernanda Caro Carvajal"/>
                                <option value="María Paula Gil Buitrago"/>
                                <option value="Mishell Nikol Uribe Guerrero"/>
                                <option value="Sofia González Zubieta "/>
                                <option value="Veronika Alexandra Esparragoza Molina"/>
                                <option value="María Fernanda García Avila"/>
                            </datalist>
                       </p>
                       <p>
                           <input type="text" name="nombre" id="nombre" onChange={handleInputChange} value={values.nombre} placeholder="Nombre" required/>
                       </p>
                       <p>
                           <input type="text" name="apellido" id="apellido" onChange={handleInputChange} value={values.apellido} placeholder="Apellido" required/>
                       </p>
                       <p>
                            <select name="parentesco" onChange={handleInputChange} id="parentesco" required>
                               <option value={"parentesco"}>Parentesco</option>
                               <option value={"madre_padre"}>Madre/Padre</option>
                               <option value={"pareja"}>Pareja</option>
                               <option value={"familiar"}>Familiar</option>
                               <option value={"Amigo"}>Amigo</option>
                               <option value={"otro"}>Otro</option>
                           </select>
                       </p>
                       <p>
                           <input type="text" name="tel" id="tel" onChange={handleInputChange} value={values.tel} placeholder="Teléfono" required />
                       </p>
                       <p>
                           <input type="number" maxlength="2" name="edad" id="edad" onChange={handleInputChange} value={values.edad} placeholder="Edad" required/>
                       </p>
                       <p>
                           <select name="localidad" onChange={handleInputChange} id="localidad" required>
                               <option value={"localidad"}>Localidad</option>
                               <option value={"usaquen"}>1.Usquén</option>
                               <option value={"chapinero"}>2.Chapinero</option>
                               <option value={"santa_fe"}>3.Santa Fé</option>
                               <option value={"usme"}>4.San Cristóbal</option>
                               <option value={"usme"}>5.Usme</option>
                               <option value={"tunjuelito"}>6.Tunjuelito</option>
                               <option value={"bosa"}>7.Bosa</option>
                               <option value={"kennedy"}>8.Kennedy</option>
                               <option value={"fontibon"}>9.Fontibón</option>
                               <option value={"engativa"}>10.Engativá</option>
                               <option value={"suba"}>11.Suba</option>
                               <option value={"barrios_unidos"}>12.Barrios Unidos</option>
                               <option value={"teusaquillo"}>13.Teusaquillo</option>
                               <option value={"martires"}>14.Los Mártires</option>
                               <option value={"antonio"}>15.Antonio Nariño</option>
                               <option value={"puente"}>16.Puente Aranda</option>
                               <option value={"candelaria"}>17.Candelaria</option>
                               <option value={"rafael"}>18.Rafael Uribe Uribe</option>
                               <option value={"bolivar"}>19.Ciudad Bolívar</option>
                               <option value={"sumapaz"}>20.Sumapaz</option>
                               <option value={"soacha"}>21.Soacha</option>
                               <option value={"otros"}>22.Otros</option>
                           </select>
                       </p>
                       <p>
                           <select name="genero" onChange={handleInputChange} id="genero" required>
                               <option value={"genero"}>Género</option>
                               <option value={"mujer"}>Mujer</option>
                               <option value={"hombre"}>Hombre</option>
                               <option value={"otro"}>Otro</option>
                           </select>
                          
                       </p>
                        

                       <p id="text1">
                           ¿Has tenido síntomas de COVID-19 en las últimas 48 horas o has tenido contacto con una persona contagiada?

                       </p>
                       <p>
                           Si <input type="radio" name="certify1" id="yes" onChange={handleChange} checked={checked.certify1} /> 
                           No <input type="radio"  name="certify2" id="no" onChange={handleChange} checked={checked.certify2}  /> 
                       </p>
                       <p>
                 
                           <input type="submit" id="enviar1" value="Enviar" />
                           <input type="reset" id="borrar" value="Borrar" />
                       </p>

                       </form>


                       

                </div>
                
        </div>

    )
}
export default Acompanante