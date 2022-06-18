import React,{useState} from 'react'


export default function Textform(props) {
    const handleupclick = () => {
        // console.log("upcase was clicked"+ text);
        const newtext=text.toUpperCase();
        settext(newtext);
        // showalert("Text has been converted to Upper case","success")
    }
    const handleonchange=(event)=>
    {
        console.log("on change");
        settext(event.target.value);
    }
    const handleloclick=()=>
    {
        // console.log("upcase was clicked"+ text);
    let newtext2=text.toLowerCase();
        settext(newtext2);
    }
    const handleclclick=()=>{
        let newt= '';
        settext(newt);
    }
    const [text, settext] = useState('enter text here');
    const handlecopy=()=>
    {
        var text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleextraspace=()=>
    {
        let newt=text.split(/[ ]+/);
        settext(newt.join(" "))
    }

    return (

        <>
            <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                
        <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='dark'?'white':'black'}} onChange={handleonchange} id="mybox" rows="8"></textarea>

            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleupclick}>Convert to upper case</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleloclick}>Convert to lower case</button>

            <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleclclick}>Reset text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1  my-1" onClick={handlecopy}>Copy text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1   " onClick={handleextraspace}>Remove extra space</button>

        </div>
        <div className="container my-3" >
            <h1 style={{color:props.mode==='light'?'black':'white'}}>Your text summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!=0}).length} Minutes read</p>
            <h2 style={{color:props.mode==='light'?'black':'white'}}>Preview</h2>
            <p>{text.length>0?text:"nothing here"}</p>
        </div>  
        </>

    )
}
