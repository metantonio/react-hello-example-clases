import React from "react"; //React no lo reconoce como componente sin esta línea

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//importamos otros componentes que nos interesen
import Card from "./card.jsx";

//create your first component
//los componentes se definen con la primera letra en mayúscula
const Home = () => {
  //Home es un componente
  let ejemplo = "Hola Rigo!!!!";
  let link4Geeks = "https://www.google.com";
  const alerta = () => {
    alert("Hola");
  };

  let tituloNoticias = [
    {
      titulo: "LA IA",
      noticia: "La IA dominará el mundo",
      boton: true,
    },
    {
      titulo: "El Mundo",
      noticia: "El mundo es grande",
    },
    {
      titulo: "Turquía",
      noticia: "Sismo en Turquía",
    },
  ];

  return (
    <>
      <div className="text-center">
        <h1 className="text-center mt-5">{ejemplo}</h1>
        <p>
          <img src={rigoImage} />
        </p>
        <a href="#" className="btn btn-success">
          If you see this green button... bootstrap is working...
        </a>
        <p>
          Made by <a href={link4Geeks}>4Geeks Academy</a>, with love!
        </p>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            console.log("test del botón alerta");
            alerta();
          }}
        >
          Alerta
        </button>
      </div>
{/*       <Card titulo="Noticia 1" descripcion="la IA dominará el mundo" habraboton={true}/>
      <Card titulo="Noticia 2" descripcion="Se acabó la probreza" />
      <Card titulo="Noticia 3" descripcion="los programadores son los mejores"/> */}
	  {tituloNoticias.map((item, index)=>{
		return <li key={index}>{item.titulo}</li>
	  })}

      {tituloNoticias.map((item, index) => {
        return (
          <Card
            titulo={item.titulo}
            descripcion={item.noticia}
            habraboton={item.boton}
			key={index}
          />
        );
      })}
    </>
  );
};

export default Home;
