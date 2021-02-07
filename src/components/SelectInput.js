import React from "react";


const SelectInput = (props) => {
    const {label, onChange, options, initialValue} = props;

    return (
        <div className={"input-row"}>
            <label>{label}</label>
            <select onChange={onChange} defaultValue={initialValue}>
                {options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
            </select>
        </div>
    );
}

export default SelectInput;