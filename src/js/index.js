//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/clase1/home.jsx";
import HomeClase2 from "./component/clase2/homeClase2.jsx";
import Home3 from "./component/clase3/home3.jsx";
import Home4 from "./component/clase4/home4.jsx";

//render your react application
ReactDOM.render(<Home4/>, document.querySelector("#app"));

