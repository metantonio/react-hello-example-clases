//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/clase1/home.jsx";
import HomeClase2 from "./component/clase2/homeClase2.jsx";
import Home3 from "./component/clase3/home3.jsx";
import SecondsCounter from "./component/secondsCounter.jsx";

//render your react application
let tiempoSegundos = 0
let decenaSeconds=0
let centenaSeconds =0 

setInterval(() => {
    tiempoSegundos = tiempoSegundos + 1
    /* if(tiempoSegundos>9){
        tiempoSegundos=0
        decenaSeconds++
        if(decenaSeconds>5){
            decenaSeconds=0
            centenaSeconds++
        }
    } */
    /* if(tiempoSegundos%10==0 && tiempoSegundos!=0){
        tiempoSegundos=0
        decenaSeconds++
    }
    if(decenaSeconds%6==0 && decenaSeconds!=0){
        decenaSeconds=0
        centenaSeconds++
    } */
    switch(true){
        case tiempoSegundos>9:
            tiempoSegundos=0
            decenaSeconds++
            break;
        case decenaSeconds>5:
            decenaSeconds=0
            centenaSeconds++
            break;
        default:
            break
    }

    ReactDOM.render(<SecondsCounter centenaSeconds={centenaSeconds} decenaSeconds={decenaSeconds} seconds={tiempoSegundos} />, document.querySelector("#app"));
        
}, 100)


