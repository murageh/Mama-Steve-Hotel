import React, {useState} from "react";
import Editor from "./Editor";


const AddItem = (props) => {

    const {onAction, onClose} = props;

    const [item, setItem] = useState({
        "name": "",
        "price": 0,
        "category": "fruits",
    });

    const addItem = () => {
        onAction(item);
        onClose();
    }

    return(
        <Editor
            title={"Add Item"}
            actionText={"Add"}
            item={item}
            setItem={setItem}
            onClose={onClose}
            onAction={addItem}
            disableName={false}
        />
    )
}

export default AddItem;