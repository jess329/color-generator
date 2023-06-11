import React, { useEffect, useState } from 'react'
import Values from 'values.js'

function Form(props) {
    const [color, setColor] = useState("#3b1242")

    const handleSubmit = (e) => {
        e.preventDefault()
        setColor(document.getElementById('input2').value)
        const colorsArr = new Values(color).all(10)
        console.log(colorsArr)
        props.setColors(colorsArr)
    }

  return (
    <div className='container'>
        <div className="header">
            <h2 className="title">Color Generator</h2>
        </div>
        <form onSubmit={handleSubmit} className='color-form'>
            <input type="color" name='color-input' id='input1' value={color} 
            onChange={(e) => setColor(e.target.value)}/>
            <input type="text" name='color-input-text' id='input2'
            onChange={(e) => setColor(e.target.value)} value={color} />
            <button type='submit' className='btn' style={{backgroundColor: color}}>Submit</button>
        </form>
    </div>
  )
}

export default Form