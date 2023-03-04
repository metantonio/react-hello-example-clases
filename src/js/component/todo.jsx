import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//Importo estilos
import "../../styles/todolist.css"

//create your first component
const ToDo = () => {
	const [arrTemp, setArrTemp] = useState([
		{ tarea: "Pasear al perro", done: false },
		{ tarea: "Ir al cine", done: false }
	])
	//const arrTemp = ["Pasear al perro", "Ir al cine"]
	const eliminarTarea = (indice) => {
		setArrTemp(
			arrTemp.filter((item, index) => {
				return index != indice
			})
		)
	}
	//Esto es lo que hace la función eliminar:
	//Imaginemos que tenemos el arreglo = ["hola", "juan", "pedro"]
	//										 0		 1		  2		

	//eliminarTarea(1)=> arreglo[1] = "Juan" => este no irá al arreglo nuevo
	//por lo tanto el arreglo que resultará es ["hola", "pedro"]


	//let contador=arrTemp.length

	useEffect(() => {
		console.log("se reenderizó el componente Home")
	}, [arrTemp])

	return (
		<div className="container justify-content-center align-item-center">
			<div className="row d-flex justify-content-center">
				<input
					placeholder="Agregue una tarea nueva"
					onKeyDown={(e) => { //eventListener
						if (e.keyCode == "13") {
							console.log("Presionaste el Enter: ", e.target.value)
							setArrTemp([...arrTemp, { tarea: e.target.value, done: false }])
						}
					}}
				/>
			</div>
			<div className="row d-flex justify-content-center">
				Tareas
			</div>
			<div className="row d-flex justify-content-center">
				{arrTemp && arrTemp.length > 0 ?
					<>
						{arrTemp.map((item, index) => {
							return <li key={index} className="d-flex justify-content-between">
								{index + 1}-{item.tarea} - <span>{item.done ? "Realizada" : "Por Hacer"}</span>
								<button
									className="ocultar"
									type="button"
									onClick={() => {
										eliminarTarea(index)
									}}
								>
									Eliminar
								</button>
							</li>
						})}
					</>
					:
					<><h1>No hay Tareas</h1>
					</>
				}
			</div>
			<h2>Cantidad de Tareas: {arrTemp.length}</h2>
		</div>
	);
};

export default ToDo;
