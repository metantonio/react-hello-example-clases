import React, { useEffect, useState } from "react";

const ComponenteHijo = ({ nombre, edad, setNombre }) => {

    useEffect(() => { console.log("Se reenderizó el compoenente Hijo") }, [nombre])

    return (<>
        <br />
        <h1>hola {nombre} de edad: {edad}</h1>

        <input onKeyUp={
            (e) => {
                if (e.keyCode == "32") {
                    setNombre("espacio")
                }
            }
        } />
    </>)
}

export default ComponenteHijo;