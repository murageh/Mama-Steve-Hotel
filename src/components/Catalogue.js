import React, {useState, useEffect} from "react";
import Category from "./Category";
import AddItem from "./AddItem";


const Catalogue = (props) => {
    const {data, setData} = props;
    const [showAddDialog, setShowAddDialog] = useState(false);

    const onAddItem = (item) => {
        let new_data = {};
        new_data[item["name"]] = {price: item["price"], category: item["category"]};
        setData({...data, ...new_data});
    }

    const onClose = () => {
        setShowAddDialog(false);
    }

    const getCategorised = () => {
        const categorised = {};
        Object.entries(data).map(([name, {price, category}]) => {
            if(!categorised.hasOwnProperty(category)){
                categorised[category] = [];
            }
            categorised[category] = [
                ...categorised[category],
                {"item_name": name, "item_price": price},
            ]
        })
        return categorised;
    }

    return(
        <div className={"catalogue"}>
            <p>
                Catalogue
                <button onClick={()=>setShowAddDialog(true)}>Add</button>
            </p>
            <ul className={"catalogue-list"}>
                {
                    Object.entries(getCategorised()).map(([category_name, items]) => {
                        return <Category key={category_name} items={items} name={category_name}/>;
                    })
                }
            </ul>
            {showAddDialog ?
                <AddItem
                    onAction={onAddItem}
                    onClose={onClose}
                /> : null
            }
        </div>
    )
}

export default Catalogue;