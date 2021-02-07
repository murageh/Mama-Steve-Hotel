import React from "react";
import Category from "./Category";


const Catalogue = (props) => {
    const {categories} = props;

    return(
        <div className={"catalogue"}>
            <p>Catalogue</p>
            <ul className={"catalogue-list"}>
                {
                    Object.entries(categories).map(([name, items]) => {
                        return <Category key={name} items={items} name={name}/>;
                    })
                }
            </ul>
        </div>
    )
}

export default Catalogue;