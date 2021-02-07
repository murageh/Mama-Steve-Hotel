import React from "react";
import "../styles/main.css";


const Item = (props) => {
    const {name, price, category, setShowUpdate, setShowDelete} = props;

    const getItem = () => {
        return {
            name: name,
            price: price,
            category: category
        };
    }

    const startUpdate = () => {
        setShowUpdate(getItem());
    }

    const startDelete = () => {
        setShowDelete(getItem());
    }

    return(
        <li className="item">
            <span className={"item-name"}>{name}</span>
            <span className={"item-price"}>{price}</span>
            <button className={"edit-btn"} onClick={startUpdate}>edit</button>
            <button className={"delete-btn"} onClick={startDelete}>delete</button>
        </li>
    )
}

export default Item;