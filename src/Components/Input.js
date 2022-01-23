import React from "react";

export default function Input(props) {
    return (
        <input type= 'text' value = {props.userName} onChange={props.handleChange}></input>
    )
}