import React from "react";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import Dialog from "./Dialog";


const Editor_ = (props) => {

    const {setItem, item} = props;

    const editItemField = (field) => {
        setItem({...item, ...field});
    }

    return (
        <div className={"editor"}>
            <TextInput
                label={"Name"}
                onChange={(e) => editItemField({name: e.target.value})}
            />
            <TextInput
                label={"Price"}
                onChange={(e) => editItemField({price: e.target.value})}
            />
            <SelectInput
                label={"Category"}
                onChange={(e) => editItemField({category: e.target.value})}
                options={["fruits", "vegetables", "meat"]}
            />
        </div>
    )
}

const Editor = Dialog(Editor_);
export default Editor;