import React, { useEffect } from "react";
import { useState } from "react";
import Form from "./Form";
import ColorList from "./ColorList";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [colors, setColors] = useState([])

  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(10)
      setColors(newColors)
      toast.success("successfully added color")
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <main>
      
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center"/>
    </main>
  ) 
  
};
export default App;
