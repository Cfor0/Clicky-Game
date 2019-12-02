import React from "react";

function Title(props) {
    return <h1 className="navbar navbar-dark bg-primary">
        {props.children}
        <div className="">
            Count: {props.count} Highscore: {props.highscore}
        </div>

    </h1>;
}

export default Title;
