import React from 'react'
import { nanoid } from 'nanoid'

function ColorList({colors}) {
  
    return (
    <div className='colors'>
        {colors.map((color) => {
            return (
                <div className={colors.indexOf(color) > 10 ? "color color-light" : "color"} key={nanoid()} style={{backgroundColor: `#${color.hex}`}}>
                    <p className='percent-value'>{color.weight}%</p>
                    <p className='color-value'>#{color.hex} </p>
                </div>
            )
        })}
    </div>
    )
}

export default ColorList