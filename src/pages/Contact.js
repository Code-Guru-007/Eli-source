import React from "react";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

function Contact(){

    return (
        <>
            <Navbar search={false}/>
            <div className="px-[30px] py-[50px]">
                <div className="grid md:grid-cols-2 gap-[10px]">
                    <div className="hover:scale-[1.03] hover:shadow-2xl duration-500 grid grid-rows-3 bg-white border-[2px] border-neutral-400 rounded-[20px] px-[5%] py-[10%]">
                        <div className="row-span-2 flex items-center"><img alt="whatsapp logo" src="/assets/whatsapp.svg"/></div>
                        <div className="flex items-center justify-center" >
                            <div>
                                <a rel="noreferrer" className="hover:cursor-pointer text-white py-[10px] px-[20px] bg-emerald-500 hover:bg-emerald-600 border rounded-full text-center text-[20px]  " href="https://chat.whatsapp.com/DxfjUwOlc0lDZTzJElGehO" target="_blank">Join with whatsapp</a>
                            </div>
                        </div>
                    </div>
                    <div className="hover:scale-[1.03] hover:shadow-2xl duration-500 grid grid-rows-3 bg-white border-[2px] border-neutral-400 rounded-[20px] px-[5%] py-[10%]">
                        <div className="row-span-2 flex w-[50%] items-center">
                            <img alt="Instagram1" src="/assets/instagram1.png" />
                            <img alt="Instagram2" src="/assets/instagram2.png" />
                        </div>
                        <div className="flex items-center justify-center">
                            <div>
                                <a rel="noreferrer" className="hover:cursor-pointer text-white py-[10px] px-[20px] bg-emerald-500 hover:bg-emerald-600 border rounded-full text-center text-[20px]  " href="https://www.instagram.com/_community_deal_alerts_/" target="_blank">Join with Instagram</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 w-full">
                <Footer />
            </div>
        </>
    );

}

export default Contact;