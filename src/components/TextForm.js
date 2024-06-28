import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpclick = () => {
    // console.log("Uppercase was clicked "+text);
    let newText = text.toLocaleUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success");
  };

  const handleLoclick = () => {
    // console.log("Uppercase was clicked "+text);
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","success");
  };
  const handleClearText= () => {
    // console.log("Uppercase was clicked "+text);
    let newText = "";
    setText(newText);
    props.showAlert("Text is Cleared","success");
  };

  

const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}

const handleCapitalize = () => {
    let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
    setText(newText);
    props.showAlert("Text is capatalized!","success");
}
  

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  
  

  const [text, setText] = useState("");
  // text="new text"; wrong way to change state
  // setText("new text"); correct way to change state
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}}
          id="myBox"
          rows="8"
        ></textarea>
      </div>

      

      <button className="btn btn-primary mx-2" onClick={handleUpclick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLoclick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleClearText} >
        Clear
      </button>
      <button type="submit" onClick={speak} className="btn btn-primary mx-2 ">Speak</button>

      <button className="btn btn-primary mx-2" onClick={handleCapitalize} >
        Capitalize
      </button>
      
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length } Word and {text.length} Characters</p>
        <p>You Can Read in {0.008*text.split(" ").length} Minutes </p>

        <h2>Preview</h2>
        <p>{text.length>0? text:"Enter somthing in the Textbox to preview here"}</p>
    </div>
    </>
  );
}
