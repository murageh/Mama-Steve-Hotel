import React, {useState, useEffect, Fragment} from "react";
import {getData} from "../services";
import Title from "./Title";
import Catalogue from "./Catalogue";

const App = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        getData().then((fetched_data) => {
                setData(fetched_data);
            }
        )
    }, []);

    return (
        <Fragment>
            <Title/>
            <Catalogue data={data} setData={setData}/>
        </Fragment>
    );
}

export default App;