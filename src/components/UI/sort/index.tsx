import React from "react";
import './index.css'

const Sort = () => {
    return (
        <div className='almost-select'>
            <input type='radio' name='temp' id='temp_high' checked />
            <input type='radio' name='temp' id='temp_low' />
            <output htmlFor='temp_high'>High</output>
            <output htmlFor='temp_low'>High1111</output>
            <div className='buttons'>
              <label htmlFor='temp_high'>▲ss</label>
              <label htmlFor='temp_low'>▼ss</label>
            </div>
        </div>
    )
}

export default Sort;
