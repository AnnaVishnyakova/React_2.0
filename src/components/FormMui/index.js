import { useEffect, useState } from "react";
import {TextField,Button} from "@mui/material";


// /import "./styles.css";

export const FormMui = ({ onSubmit }) => {
  const [value, setValue] = useState("");
 

  const handleChange = (e) => {
    setValue(e.target.value);
   
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
    setValue("");
    console.log(autoFocus)
    
  };
  
  
    
  return (
    <form onSubmit={handleSubmit}>
      <TextField value={value} onChange={handleChange} autoFocus/>
      <Button type="submit" variant="outlined">Send</Button>
    </form>
  );
};