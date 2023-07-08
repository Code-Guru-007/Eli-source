import React from "react";
import { useParams } from "react-router-dom";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

function Details({datas}) {

    const { id } = useParams()

    const _data = datas.filter((data) => data.id === id)[0]

    return (
        <>
            <Navbar search={false}/>
            <div className="flex items-center">
                <div className="gird grid-cols-3">
                    <div className="col-span-2 w-full">
                        <img src={_data.img}/>
                    </div>
                    <div></div>
                </div>
            </div>
            <Footer />
        </>
    );

}

export default Details;