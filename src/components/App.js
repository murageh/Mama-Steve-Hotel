import React, {useState, useEffect, Fragment} from "react";
import {getData} from "../services";
import Title from "./Title";
import Catalogue from "./Catalogue";

const App = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        let mounted = true;
        getData().then((fetched_data) => {
                if(mounted) {
                    setData(fetched_data);
                }
            }
        )
        return () => {
            mounted = false;
        }
    }, []);

    return (
        <Fragment>
            <Title/>
            <Catalogue categories={data}/>
        </Fragment>
    )
}

export default App;