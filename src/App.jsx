import React, { useEffect } from "react";
import { useState } from "react";
import Form from "./Form";
import ColorList from "./ColorList";
import Values from "values.js";

const App = () => {
  const [colors, setColors] = useState([])

  return (
    <main>
      
      <Form setColors={setColors} />
      <ColorList colors={colors} />
    </main>
  ) 
  
};
export default App;
