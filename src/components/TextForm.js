import React, { useState } from 'react'

const TextForm =(props)=>  {
    const Change = (event)=>{
        setText(event.target.value)
    }
    const UppercaseClick = ()=>{
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Convert to Uppercase!","success")
    }
    const LowercaseClick = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Convert to Lowercase!","success")
    }
    const ReversClick = ()=>{
        let newText = text.split('').reverse().join('')
        setText(newText)
        props.showAlert("Convert to Reverse text!","success")
    }
    const SpaceClick = ()=>{
        let newText = text.split(/[ ]+/).join(' ')
        setText(newText)
        props.showAlert("Remove extra spaces!","success")
    }
    const CopyClick = ()=>{
        navigator.clipboard.writeText(text)
        props.showAlert("Copied successful!","success")
    }
    const ClearClick = ()=>{
        let newText = ''
        setText(newText)
        props.showAlert("Clear text!","success")
    }
    const [text,setText] = useState('')
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1 className='mt-2 mb-2'>{props.heading}</h1>
            <div className="mt-3">
                <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'rgba(19,22,24,1)':'white', color: props.mode==='dark'?'white':'black'}} value={text} onChange={Change} id="exampleFormControltextarea1" rows="10" placeholder='Enter the text here'></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mt-2 mx-1" onClick={ UppercaseClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mt-2 mx-1" onClick={ LowercaseClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mt-2 mx-1" onClick={ ReversClick}>Convert to ReversText</button>
            <button disabled={text.length===0} className="btn btn-primary mt-2 mx-1" onClick={ SpaceClick}>Remove ExtraSpace</button>
            <button disabled={text.length===0} className="btn btn-primary mt-2 mx-1" onClick={ CopyClick}>Copy text</button>
            <button disabled={text.length===0} className="btn btn-primary mt-2 mx-1" onClick={ ClearClick}>Cleat text</button>
        </div>
        <div className="container mt-2" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your text Summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Miniuts to read this sentents</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        </>
    )
}

export default TextForm
