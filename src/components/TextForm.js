import React,{useState}from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        //console.log("uppercase clicked"+ text );
        let newText = text.toUpperCase();
        setText(newText)
    }

     const handleLowClick=()=>{
     
        let newText = text.toLowerCase();
        setText(newText)
    }
     
    


    const handleONChange=(event)=>{
       setText(event.target.value)
    }
    const[text,setText]=useState('enter')
  return (
    <div>
         <h1>{props.heading}</h1>
         <div className="mb-3">
         <textarea className='form-control' value={text} onChange={handleONChange} id="mybox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>convert to uppercase</button>
        <button className='btn btn-primary' onClick={handleLowClick}>convert to lowercase</button>
        <div className='container my-3'>
            <h1>your text summary</h1>
            <p>{text.split(" ").length} words and{text.length} characters</p>
            <p>{0.008* text.split(" ").length} minutes read</p>
            <h2>preview</h2>
            <p>{text}</p>

        </div>
    </div>
  )
}
