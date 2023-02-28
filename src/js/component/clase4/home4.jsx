import React, { useState, useEffect } from "react"; //React no lo reconoce como componente sin esta línea
import "../../../styles/clase4.css"

//los componentes se definen con la primera letra en mayúscula
const Home4 = () => {
    //Home es un componente
    const [name, setName] = useState("")
    const [state, setState] = useState({ //variable no primitiva
        name: "", //dato primitivo
        isTrue: false, //dato primitivo
        obj: {
            apellido: ""
        }
    })

    const obtenerNombre = (evento) => {
        console.log(evento.target.value)
        setName(evento.target.value)
    }

    const obtenerStateNombre = () => {
        setState({ ...state, name: name }) // por qué hacerlo así? dejamos las demás propiedades iguales y se cambian las que interesen
    }

    const cambiarPorTrue = () => {
        setState({ ...state, isTrue: !state.isTrue })
    }

    useEffect(() => { //un useEffect se ejecuta siempre que el componente aparezca por primera vez
        console.log("Se reenderizó de nuevo el componente", state)
    }, [state.name, state.isTrue, state.obj.apellido]) //y este se ejecutará de nuevo cuando los estados cambien. PD: Usar datos primitivos

    return (
        <div className={`btn ${state.isTrue ? "black2" : "white2"}`}>
            <h1>Clase 3</h1>
            <input type="text" placeholder="Coloque su nombre"
                onChange={(e) => { obtenerNombre(e) }} />
            <h4>Nombre de la persona es: {name} - {`${state.isTrue}`}</h4>
            <button type="button" onClick={() => { obtenerStateNombre() }}>Agregar Nombre</button>

            <button className={`btn ${state.isTrue ? "btn-primary" : "btn-danger"}`}
                type="button"
                onClick={() => { cambiarPorTrue() }}>Quitar el {`${state.isTrue}`}</button>

            <br />
            <h4>Reenderizado Condicional</h4>
            {state.isTrue ?
                <h4>
                    El usuario está logueado
                </h4>
                :
                <h4>
                    El usuario no está conectado
                </h4>}
        </div>
    );
};

export default Home4;
