import './style.css'

export const Message= ({text,func})=>{
   
    return ( <h3 className="header" onClick={func}> My name is: {text} </h3> )
    
}