import React from "react";
import "./style.css"

function ClickCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} onClick={() => props.click(props.id)} className="remove"></img>/>
            </div>
        </div>
    )
}

export default ClickCard;