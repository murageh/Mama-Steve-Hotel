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
                    items.map(({name, category, price}) => {
                        return <Item key={name} name={name} category={category} price={price}/>
                    })
                }
            </ul>
        </div>
    )
}

export default Category;