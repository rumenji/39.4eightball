import React, {useState} from "react";
import "./ColorBox.css";

const ColorBox = (props) => {
    const color = {backgroundColor: props.color};
    return(
        <div className="box" id={props.id} style={color}>

        </div>
    )
}

export default ColorBox;