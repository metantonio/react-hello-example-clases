import React from "react";

const Card = (props) => {
  //<></> se conocen como React Fragment

  return (
    <>
      <div className="card" key={props.key}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.titulo}</h5>
          <p className="card-text">{props.descripcion}</p>
          {props.habraboton ? (
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
