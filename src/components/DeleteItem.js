import React, {useState} from "react";
import Editor from "./Editor";
import Dialog from "./Dialog";

const DeletePrompt = (props) => {
    const {itemData} = props;

    return (
        <div className={"delete-prompt"}>
            Are you sure you want to delete <span>{itemData["name"]}</span>?
        </div>
    )
}

const DeleteDialog = Dialog(DeletePrompt);

const DeleteItem = (props) => {

    const {onAction, onClose, itemData} = props;

    const deleteItem = () => {
        onAction(itemData);
        onClose();
    }

    return(
        <DeleteDialog
            title={"Delete Item"}
            onAction={deleteItem}
            onClose={onClose}
            actionText={"Delete"}
            itemData={itemData}
        />
    )
}

export default DeleteItem;