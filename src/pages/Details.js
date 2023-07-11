import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

import '../App.css'

function Details({datas}) {

    const { id } = useParams()

    const _data = datas.filter((data) => data.id === id)[0]

    useEffect(() => {

    }, []);

    return (
        <div className="h-[100vh]">
            <Navbar search={false}/>
            <div className="p-[20px] h-auto">
                <div className='border border-neutral-400 rounded-xl bg-white w-full p-[25px]'>
                    <div className='grid lg:grid-cols-5 gap-[5vw]'>
                        <div className='border border-neutral-300 col-span-2 p-[10px] w-full flex items-center justify-center'>
                            <img className="" src={_data.Image} alt={_data.Image}/>
                        </div>
                        <div className='flex lg:justify-center justify-between lg:col-span-3 grid grid-rows-4 lg:ml-[10px]'>
                            <div className="flex items-center justify-center my-[20px] pb-[3px] border-b-[1px] border-neutral-300">
                                <p className="text-[20px] detail-title">{_data.Name}</p>
                            </div>
                            <div className="flex items-center text-center">
                                <div>
                                    Act fast and join out&nbsp;
                                    <a className="text-sky-600 underline font-bold" rel="noreferrer" href="https://chat.whatsapp.com/DxfjUwOlc0lDZTzJElGehO" target="_blank">WhatsApp Community</a>
                                    &nbsp;and&nbsp;
                                    <a className="text-sky-600 underline font-bold" rel="noreferrer" href="https://www.instagram.com/_community_deal_alerts_/" target="_blank"> Instagram </a> 
                                    &nbsp;to get amazing deals, including airline &nbsp;
                                    <b>PRICE MISTAKES!</b> 
                                    &nbsp;🔥
                                </div>
                            </div>
                            <div className='flex justify-between items-center'>
                            <a href={_data.Url} target="_blank" rel="noreferrer"><img className="w-[150px] h-[50px]" alt={id} src={`/assets/${_data.Company}.svg`} /></a>
                                <div className=" text-[14px] sm:text-[20px] flex justify-between mt-[10px]" style={{height:"30px"}}>
                                    <p className="text-green-600 font-bold" style={{marginRight:"20px"}}>{_data.Price2}</p>
                                    <p className="line-through text-red-600 font-bold">{_data.Price1}</p>
                                </div>
                            </div>
                            <div className="flex justify-end items-center"><a className="btn" href={_data.Url} target="_blank" rel="noreferrer">See Deal</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:absolute lg:bottom-0 w-full">
                <Footer />
            </div>
        </div>
    );

}

export default Details;