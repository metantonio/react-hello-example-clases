import React from "react";

const SecondsCounter = (props) => {
    
    return (<>
        Soy el componente SecondsCounter
        <div className="container d-flex">
            <div className="row">
            <div className="col-4">{props.centenaSeconds}:</div>
                <div className="col-4">{props.decenaSeconds}</div>
                <div className="col-4"> {props.seconds}</div>
            </div>

        </div>
    </>)
}

export default SecondsCounter;