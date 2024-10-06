import React, { useState } from "react";

export default function Textform(props) {
    const [text, setText] = useState('Enter Text here');

    const handleOnChange = (event)=>{
        console.log('on change called');
        setText(event.target.value);
    }

    const convertUpperCase = ()=>{
        console.log('Uper case button clicked');
        props.showtheAlert("Converted to Upper case", "success");
        setText(text.toUpperCase());
    }

    const convertLowerCase = () =>
    {
        setText(text.toLowerCase());
        props.showtheAlert("Converted to Lower case", "success");

    }

    let textColor = props.mode==='light'?'black':'white';
    let backColor = props.mode==='dark'?'rgba(33, 37, 41, 1)':'white';

    return(
        <>
        <div style={{color: textColor, backgroundColor:backColor}}> 
        <div className="container mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" id="myBox"  value ={text} onChange={handleOnChange} rows="8"
             style={{color:textColor, backgroundColor:backColor}}></textarea>
            <button className= "btn btn-primary my-3 mx-3" onClick={convertUpperCase}>Convert to UpperCase</button>
            <button className= "btn btn-primary" onClick={convertLowerCase}>Convert to Lowercase</button>
        </div>
        
        <div className="container my-3">
            <h3>Your Text summary</h3>
            <p>Total words: {text.split(' ').filter((element)=>{return element.length!=0}).length}  </p>
            <p>Total characters: {text.length} </p>
        </div>

        </div>
        </>
    )
}

