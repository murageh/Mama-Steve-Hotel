import React from "react";


const TextInput = (props) => {
    const {label, onChange, type} = props;

    return (
        <div className={"input-row"}>
            <label>{label}</label>
            <input type={type} onChange={onChange} />
        </div>
    );
}

export default TextInput;