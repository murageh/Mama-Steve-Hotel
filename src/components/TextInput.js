import React from "react";


const TextInput = (props) => {
    const {label, onChange, type, initialValue, disabled} = props;

    return (
        <div className={"input-row"}>
            <label>{label}</label>
            <input type={type} defaultValue={initialValue} onChange={onChange} disabled={disabled} />
        </div>
    );
}

export default TextInput;