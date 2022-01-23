import React from "react";


function Button(props) {
    return (
        <button className="button-style" type="button" disabled = {props.disableProp} onClick={props.handleClick}>Sign In</button>
    )
}

export default Button;