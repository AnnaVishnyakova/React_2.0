import { useEffect, useState,useRef } from "react";
import {TextField,Button} from "@mui/material";


// /import "./styles.css";

export const FormMui = ({ onSubmit }) => {
  const [value, setValue] = useState(""); 
  const messageFocus = useRef()
 

  const handleChange = (e) => {
    setValue(e.target.value);
   
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
    setValue("");
     messageFocus.current?.focus();
  };

  useEffect(()=>{
    messageFocus.current?.focus();
  },[])
  
  return (
    <form onSubmit={handleSubmit}>
      <TextField value={value} onChange={handleChange} inputRef={messageFocus}/>
      <Button type="submit" variant="outlined">Send</Button>
    </form>
  );
};