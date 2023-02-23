import React, { useState, useEffect } from "react";
import Clase2 from "./clase2.jsx";

const HomeClase2 = () => {
  const [verClase2, setVerClase2] = useState(true);
  const [lista, setLista] = useState([
    {
      nombre: "Antonio",
      Edad: 34,
    },
    {
      nombre: "Alexis",
      Edad: 23,
    },
  ]);
  const observar = () => {
    setVerClase2(!verClase2);
  };

  const registrar=(e)=>{
    e.preventDefault()
    let data = new FormData(e.target)
    let nombre = data.get("nombre")
    let edad = data.get("edad")
    console.log(nombre, edad)

    let obj = {
      nombre: nombre,
      Edad: edad
    }

    let arrTemp = lista.slice()
    arrTemp.push(obj)

    setLista(arrTemp) //cambiando al estado lista


  }

  useEffect(() => {
    console.log("Reenderizando componente HomeClase2");
  }, [verClase2, lista]);

  return (
    <>
      <div>Clase 2</div>
      <br/>
      <button
        className="btn btn-success"
        onClick={() => {
          observar();
        }}
      >
        Ver Clase 2
      </button>
      <br/>
      <br/>
      {verClase2 ? (
        <Clase2 />
      ) : (
        <>
        <h3>Llenar Formulario</h3>
        <br/>
        <form onSubmit={(e)=>{registrar(e)}}>
          <input placeholder="Agregar nombre" name="nombre"></input>
          <input type="number" placeholder="18" name="edad"/>
          <button className="btn btn-primary" type="submit">Agregar</button>
        </form>
        <br/>
        <ul>
          {lista && lista.length>0? 
          lista.map((item, index)=>{
            return(
            <li key={index}>
              {item.nombre}{item.Edad}
            </li>
            )
          })
          : <><h3>No hay elementos en la lista</h3></>
          }
        </ul>
        </>
        
      )}
    </>
  );
};

export default HomeClase2;
