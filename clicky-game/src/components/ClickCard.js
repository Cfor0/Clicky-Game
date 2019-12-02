import React from "react";
import "./style.css"

function ClickCard(props) {
    return (
        <div className="card w-60 h-60">
            <div className="img-container">
                <img alt={props.name} src={props.image} onClick={() => props.click(props.id)} className="remove"></img>/>
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.name}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ClickCard;