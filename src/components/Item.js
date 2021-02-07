import React from "react";
import "../styles/main.css";


const Item = (props) => {
    const {name, category, price} = props;

    return(
        <li className="item">
            <span className={"item-name"}>{name}</span>
            <span className={"item-price"}>{price}</span>
        </li>
    )
}

export default Item;