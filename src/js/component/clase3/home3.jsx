import React, {useState, useEffect} from "react"; //React no lo reconoce como componente sin esta línea

//include images into your bundle

import HomeClase2 from "../clase2/homeClase2.jsx";
//create your first component
//los componentes se definen con la primera letra en mayúscula
const Home3 = () => {
 const [variable1, setVariable1] = useState({uno: 1})

 useEffect(()=>{
  console.log(variable1)
 }, [variable1])

  return (
    <>
     {/* Clase 3
     <button type="button" onClick={()=>{
      let valor = variable1.uno+ 1
      let obj = {
        uno: valor
      }
      setVariable1(obj)
      //console.log("Valor del estado es: ", variable1)
     }}>ver en Consola variable1</button>
     <div>
      <h2>{variable1.uno}</h2>
     </div> */}
     <h1>Clase 3</h1>
    </>
  );
};

export default Home3;
