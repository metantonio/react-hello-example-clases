import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2';

import Clase2 from "./clase2/clase2.jsx";
import ComponenteHijo from "./componenteHijo.jsx";

const Repaso = () => {
    let verdadero = false

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")

    const [obj, setObj] = useState({
        cliente: "Celeste", //dato primitivo
        precio: 50, //dato primitivo
        subnivel: { //dato NO PRIMITIVO
            direccion: "Av ....." //dato primitivo
        }
    })

    const registrarSuerte = (e) => {
        e.preventDefault()
        let data = new FormData(e.target)
        let [suerte, direccion] = [
            data.get("suerte"),
            data.get("direccion")
        ]
        //let suerte = data.get("suerte")
        //let direccion = data.get("direccion")

        console.log(suerte, direccion)

        Swal.fire({
            title: 'Qué quieres hacer?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Ver Suerte',
            denyButtonText: `Ver Dirección`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire(`Suerte: ${suerte}`, '', 'success')
            } else if (result.isDenied) {
              Swal.fire(`Dirección es: ${direccion}`, '', 'info')
            }
          })


    }

    useEffect(() => {
        console.log("Se setea el estado nombre: ", nombre)
        console.log("Se setea el estado obj: ", obj)
    }, [nombre, obj.cliente, obj.precio])
    //useEffect(()=>{console.log("Se setea el estado obj")}, [obj])

    useEffect(() => { console.log("Se setea el estado apellido: ", apellido) }, [apellido])

    return (<div>
        Este es el componente Repaso
        <br />
        {/* Rendeferizado Condicional */}

        {verdadero ? <>Hola</> : <>Adiós</>}

        <br />

        <Clase2 />
        <br />
        <div className="container-fluid">
            <input placeholder="Coloque su nombre" onKeyDown={(e) => {
                console.log("tecla es: ", e.target.value)
                if (e.keyCode == "13") {
                    setNombre(e.target.value)
                }
            }} />
        </div>

        <ComponenteHijo nombre={"Antonio"} edad={34} setNombre={setNombre} />
        <ComponenteHijo nombre={"Juan"} edad={25} setNombre={setNombre} />

        <ComponenteHijo nombre={nombre} edad={25} setNombre={setNombre} />

        <br />
        <button type="button" onClick={(e) => {
            setObj({
                cliente: "Stephanie",
                precio: 50
            })
        }}>
            Click aquí
        </button>


        <br />

        <input placeholder="Inserte un Cliente" onKeyDown={(e) => {
            if (e.keyCode == "13") {
                setObj({ ...obj, cliente: e.target.value, cliente2: e.target.value })
            }
        }}></input>

        <br />
        <label>Coloque su Apellido</label>
        <input placeholder="Coloque su Apellido" onChange={(e) => { setApellido(e.target.value) }} />
        <h5>El apellido es: {apellido}</h5>

        <br />

        <h4>Formularios</h4>
        <form onSubmit={(e) => { registrarSuerte(e) }}>
            <input type="texto" placeholder="Av." name="direccion"></input>
            <input type="number" placeholder="18" name="suerte"></input>
            <button type="submit" >Enviar Formulario</button>
        </form>

        

    </div>
    )
}

export default Repaso;

//SAP 