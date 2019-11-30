import React from "react";

function Title(props) {
return <h1 className="title">{props.children} Count: {props.count} Highscore: {props.highscore}</h1>;
}

export default Title;
