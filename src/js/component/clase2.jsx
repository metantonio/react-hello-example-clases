import React, {useState, useEffect} from "react";

//HOOKING 

const Clase2 = () => {
    //Declaración de Estados
    const [resultado, setResultado] = useState(0)

    //let valor = 0; //las variables al cambiar no reenderizan el componente

    const suma = ()=>{
        //valor = valor + 1        
        //console.log("El resultado es: ", valor)
        setResultado(resultado+1) //cambiando el valor del estado
    }

    useEffect(()=>{
      console.log("me ejecutó la primera vez")

      return()=>{ //se ejecuta cuando el se apaga el componente
        setResultado(0)
        console.log("el componente se cerró")
      }
    },[]) //que sólo se va a ejecutar al iniciar el componente

    useEffect(()=>{
      console.log("cambió el estado")
      
    },[resultado]) //que manda a reenderizar nuevamente el componente cuando cambia el Estado
  

  return (
    <>
      <h2>Componente CLase 2</h2>
      <h2>{resultado}</h2>
      <button className="btn btn-primary" onClick={()=>{suma()}}>Suma</button>
      <br/>
    </>
  );
};

export default Clase2;
