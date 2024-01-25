import React, {useState} from "react";
import "./EightBall.css";
const ANSWERS = [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ]

const INITIAL = {msg: "Think of a question", color: "black"};

const EightBall = () => {
    const random = ANSWERS[Math.floor(Math.random() * ANSWERS.length)];
    const reset = () => {
        setAnswer(INITIAL);
    }
    const changeQuestion = () => {
        setAnswer(random)
        if(answer.color === 'green') setGreen(green+1) 
        if(answer.color === 'goldenrod') setGoldenrod(goldenrod+1) 
        if(answer.color === 'red') setRed(red+1) 
    }
    const [green, setGreen]= useState(0);
    const [goldenrod, setGoldenrod]= useState(0);
    const [red, setRed]= useState(0);
    const [answer, setAnswer] = useState(INITIAL);
    
    return(
        <>
        <div>
            <p>Green: {green}</p>
            <p>Goldenrod: {goldenrod}</p>
            <p>Red: {red}</p>
        </div>
        <div onClick={changeQuestion} className="circle" style={{backgroundColor: answer.color}}><p className="answer">{answer.msg}</p></div>
        <button onClick={() => reset()}>Reset</button>
        </>
    )
};

export default EightBall;