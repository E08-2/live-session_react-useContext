import React from "react";

const Button = props => {
    return (
        <div>
            <button onClick={props.update}>Create new note</button>
        </div>
    );
}

export default Button;