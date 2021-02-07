import React from "react";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import Dialog from "./Dialog";


const Editor_ = (props) => {

    // disableName allows changes to name attribute to be prevented
    // This is because name is the primary key
    const {setItem, item, disableName} = props;

    const editItemField = (field) => {
        setItem({...item, ...field});
    }

    return (
        <div className={"editor"}>
            <TextInput
                label={"Name"}
                initialValue={item["name"]}
                disabled={disableName}
                // do not allow changes to name if disableName is true
                {...(disableName ?
                    {} :
                    {onChange: (e) => editItemField({name: e.target.value})})
                }
            />
            <TextInput
                label={"Price"}
                initialValue={item["price"]}
                onChange={(e) => editItemField({price: e.target.value})}
            />
            <SelectInput
                label={"Category"}
                initialValue={item["category"]}
                onChange={(e) => editItemField({category: e.target.value})}
                options={["fruits", "vegetables", "meat"]}
            />
        </div>
    )
}

const Editor = Dialog(Editor_);
export default Editor;