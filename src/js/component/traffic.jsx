import React, {useState, useEffect} from "react";
import "../../styles/traffic.css"

const TrafficLight = () => {
    const [active, setActive] = useState("") //definir el estado, variable primitiva
    //const [red, setRed] = useState(false)


    useEffect(()=>{console.log(active)},[active]) //para renderizar el componente cuando cambie el estado

    return (<>
        <h1>Traffic</h1>
        <div className={`red-light` + `${active==="red-light"? " red-light-active" : ""}`} onClick={(e)=>{setActive(e.target.className)}}>Rojo</div>
        <br />
        <br />
        <div className={`yellow-light` + `${active==="yellow-light"? " yellow-light-active" : ""}`} onClick={(e)=>{setActive(e.target.className)}}>Yellow</div>
        <br />
        <br />
        <div className={`green-light` + `${active==="green-light"? " green-light-active" : ""}`} onClick={(e)=>{setActive(e.target.className)}}>Green</div>       

    </>)
}

export default TrafficLight;