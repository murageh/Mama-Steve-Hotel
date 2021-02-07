import React from "react";
import "../styles/main.css";


const Item = (props) => {
    const {name, price, category, setShowUpdate} = props;

    const startUpdate = () => {
        setShowUpdate({
            name: name,
            price: price,
            category: category
        });
    }

    return(
        <li className="item">
            <span className={"item-name"}>{name}</span>
            <span className={"item-price"}>{price}</span>
            <button className={"edit-btn"} onClick={startUpdate}>edit</button>
        </li>
    )
}

export default Item;