import React, { useState } from 'react'
import propTypes from 'prop-types';

export default function Textform(props){
    const [textValue ,  setTextValue ] = useState('')
    // const convertToUppser = () => {
    // const data = document.getElementById('floatingTextarea2').value;
    // document.getElementById('floatingTextarea2').value = data.toUpperCase();
    // }

    const handleSetTextValue = (event) => {
        setTextValue(event.target.value)
    }

    const convertToUpper = () => {
        let newTextValue = textValue.toUpperCase();
        setTextValue(newTextValue)
    }

    return(
        <>
            <div className="form-floating mb-4">
                <textarea className="form-control mt-5" onChange={handleSetTextValue} value={textValue} placeholder="Leave a comment here" id="floatingTextarea2" style={{height: '100px'}}></textarea>
                <label htmlFor="floatingTextarea2" className='mb-2'>{props.textlable}</label>
                <div className="mt-3 d-flex justify-content-between">
                <button type="button" onClick={convertToUpper} className={`btn mt-3 ${props.mode.color === "black" ? "btn-outline-primary" : "btn-secondary"}`}>Conver to uppercase</button>
                <p style={{fontSize: "45px" , color: props.mode.color, margin: "8px 0px 0px 0px"    }}>Total words are <span style={{fontWeight: "bold"}}>{textValue.trim().match(/\S+/g)?.length || 0}</span> & <span style={{fontWeight: "bold"}}>{textValue.trim().length}</span> characters.</p>
                </div>
            </div>
        </>
    )
}

Textform.propTypes = {
    textlable : propTypes.string
};