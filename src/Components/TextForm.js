import React from "react";
import { useState } from "react";

export default function TextForm() {
    const [text, setText] = useState('')

    const handleOnChange=(e)=>{
        setText(e.target.value)
    }

    const handlelowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleClearClick=()=>{
        let newText='';
        setText(newText);
    }
    const handlereverseClick=()=>{
        let newText=text.split("").reverse().join("");
        setText(newText);
    }

    const handleCopyText= ()=>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/)
      setText(newText.join(" "))
    }
  return (
    <>
    <div className="container">
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
          Message to Analyze
        </label>
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <button className="btn btn-primary my-2" onClick={handleUpClick}>Convert to upperCase</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handlelowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handlereverseClick}>Reverse</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleCopyText}>Copy Text</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
      </div>
      </div>
      <div className="container  my-3">
        <h2>Summary</h2>
        <p>{text.split(" ").length-1} words, {text.length} characters</p>
        <p>{0.008 * text.split('').length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
