import React from 'react';
import Item from "./Item";
import "../styles/main.css";


const Category = (props) => {
    const {items, name} = props;

    return(
        <div className={"category"}>
            <p>{name}</p>
            <ul className={"category-list"}>
                {
                    items.map(({item_name, item_price}) => {
                        return <Item key={item_name} name={item_name} category={name} price={item_price}/>;
                    })
                }
            </ul>
        </div>
    )
}

export default Category;