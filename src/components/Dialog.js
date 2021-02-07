import React from "react";


const Dialog = (WrappedComponent) => {
    return (props) => {
        const {onClose, onAction, actionText, title, ...passThrough} = props;

        const blockEvent = (e) => {
            console.log("blocking");
            e.stopPropagation();
        }

        return(
            <div className={"overlay"} onClick={onClose}>
                <div className={"dialog"} onClick={blockEvent}>
                    <p>{title}</p>
                    <div className={"dialog-body"}>
                    <WrappedComponent {...passThrough}/>
                    </div>
                    <div className={"button-bar"}>
                        <button onClick={onClose}>Cancel</button>
                        <button onClick={onAction}>{actionText}</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dialog;