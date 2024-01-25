import React, { useState } from "react";
import ColorBox from "./ColorBox";
import "./BoxesBoard.css";

const COLOR_LIST = [
    "red", "orange", "blue", "green", "yellow", "black", "white", "goldenrod"
]
const BoxesBoard = () => {
    const randomColor = () =>  COLOR_LIST[Math.floor(Math.random() * COLOR_LIST.length)];
    // const [color, setColor] = useState(randomColor);
    let boxes = [];
    for(let i=0; i<16; i++){
        boxes.push(<ColorBox id={i+1} color={randomColor()}/>)
    }
    const changeColor = () => {
        const randomID = () => Math.floor(Math.random() * (16+1));
        let box = document.getElementById(randomID());
        console.log(box)
        box.style.backgroundColor = randomColor();
    }
    return (
        <div className="box-frame">
            {boxes}
            <button onClick={changeColor}>Change</button>
        </div>
    )
}

export default BoxesBoard;