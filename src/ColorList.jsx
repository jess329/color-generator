import React from 'react'
import { nanoid } from 'nanoid'
import { toast } from 'react-toastify'

function ColorList({colors}) {
  
    const saveToClipboard = (hex) => {
        if(navigator.clipboard) {
            try {
                navigator.clipboard.writeText(`#${hex}`)
                toast.success("Color copied to Clipboard")
            } catch (error) {
                toast.error("failed to copy color")
            }
        } else {
            toast.error("failed to copy color")
        }
    }
    
    return (
    <div className='colors'>
        {colors.map((color) => {
            return (
                <div className={colors.indexOf(color) > 10 ? "color color-light" : "color"}
                key={nanoid()} style={{backgroundColor: `#${color.hex}`}}
                onClick={() => saveToClipboard(color.hex)}>
                    <p className='percent-value'>{color.weight}%</p>
                    <p className='color-value'>#{color.hex} </p>
                </div>
            )
        })}
    </div>
    )
}

export default ColorList