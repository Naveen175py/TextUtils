import React from 'react'
import { useState } from 'react'
export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("Uppercase was clicked");
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success")
  }
  const handleLoClick = ()=>{
    console.log("Lowercase was clicked");
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success")
  }
  const handleClearClick = ()=>{
    console.log("Lowercase was clicked!");
    let newText='';
    setText(newText);
    props.showAlert("Text Cleared!", "success")
  }
  const handleOnChange= (event)=>{
      setText(event.target.value);
      console.log(event);
  }
  const handleCopy= ()=>{
    var text=document.getElementById("exampleFormControlTextarea1"); 
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied!", "success")
  }
  const handleExtraSpaces= ()=>{ 
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Removed the extra spaces!", "success")
  }
  
  const [text,setText] = useState('');
  return (
      <> 
      <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1 >{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-2 my-1' onClick={handleLoClick}>Convert to Lowercase</button>
        <button className='btn btn-primary mx-2 my-1' onClick={handleClearClick}>Clear Text</button>
        <button className='btn btn-primary mx-2 my-1' onClick={handleCopy}>Copy Text</button>
        <button className='btn btn-primary mx-2 my-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
          <h2>Your text summary</h2>
          <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words ans {text.length} characters</p>
          <p>{0.008* text.split(" ").length} Minutes read </p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
    </>
  )
}
