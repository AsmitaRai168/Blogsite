import React from 'react'
import "./Inputfield.css"
const InputField = ({ inputType, onChangeInput,setPlaceholder }) => {
    return (
        <>
          <div className="input-container">
            <div className="input-main-container">
              <input
                type={inputType}
                onChange={onChangeInput}
                className="input-field"
                placeholder={setPlaceholder}
              />
            </div>
          </div>
        </>
      );
    };

export default InputField;