import React, {useState} from "react";
import Editor from "./Editor";


const UpdateItem = (props) => {

    const {onAction, onClose, itemData} = props;

    const [item, setItem] = useState(itemData);

    const updateItem = () => {
        onAction(item);
        onClose();
    }

    return(
        <Editor
            title={"Update Item"}
            actionText={"Update"}
            item={itemData}
            setItem={setItem}
            onClose={onClose}
            onAction={updateItem}
            disableName={true}
        />
    )
}

export default UpdateItem;