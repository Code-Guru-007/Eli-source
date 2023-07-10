import React from "react";
import { useParams } from "react-router-dom";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

import '../App.css'
import discount from '../assets/discount2.svg'

function Details({datas}) {

    const { id } = useParams()

    const _data = datas.filter((data) => data.id === id)[0]

    return (
        <>
            <Navbar search={false}/>
            <div className="p-[20px]">
                <div className='border border-neutral-400 rounded-xl bg-white w-full p-[25px]'>
                    <div className='grid lg:grid-cols-4'>
                        <div className='col-span-3 w-full flex items-center'>
                            <img className="w-full" src={_data.Image} alt="Image"/>
                        </div>
                        <div className='flex col-span-3 lg:justify-center justify-between lg:col-span-1 lg:grid lg:grid-rows-2 lg:ml-[10px]'>
                            <div className='flex justify-center items-center'>
                                <div className=" text-[14px] sm:text-[20px] flex justify-between mt-[10px]" style={{height:"30px"}}>
                                    <p className="text-green-600 font-bold" style={{marginRight:"20px"}}>{_data.Price2}</p>
                                    <p className="line-through text-red-600 font-bold">{_data.Price1}</p>
                                </div>
                            </div>
                            <div className="h-[60px] flex items-center justify-center">
                                <div className="text-[14px] sm:text-[20px] text-red-700 font-bold">20&nbsp;&nbsp;</div>
                                <img className="w-[30px] sm:w-[40px]" src={discount}/>
                            </div>         
                        </div>
                    </div>
                    <div className="flex items-center justify-center my-[20px]">
                        <p className="text-[20px]">{_data.Name}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );

}

export default Details;