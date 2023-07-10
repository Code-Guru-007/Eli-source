import React from "react";

import Category from "../component/Category";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

import CategoriesData from '../dealsdata/CategoriesData.json'

function Categories() {

    return (
        <>
            <Navbar search={false}/>
            <div className="p-[30px] mb-[20px]">
                {Object.entries(CategoriesData).map((data, index)=> <Category key={index} products={data} />)}
            </div>
            <Footer />
        </>
    );
}

export default Categories;