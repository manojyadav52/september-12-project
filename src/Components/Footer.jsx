import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { BsTwitter } from "react-icons/bs";
import { SlSocialInstagram } from "react-icons/sl";
import { SiWhatsapp } from "react-icons/si";

const Footer  =()=>{


    return(
        <>
        <hr />
        <footer className="bg-black text-white">
            <div className="max-w-[1240px] mx-auto container px-4 mt-10 mb-5 shadow-lg ">
                <div className="flex gap-8 text-3xl overflow-hidden text-center justify-center ">
                    <div className="hover:scale-110 duration-700 hover:text-red-800 rounded-full shadow-lg"><FaFacebookF /></div>
                    <div  className="hover:scale-110 duration-700 hover:text-red-800 rounded-full shadow-lg"><BsTwitter /></div>
                    <div className="hover:scale-110 duration-700 hover:text-red-800 rounded-full shadow-lg"><SlSocialInstagram /></div>
                    <div className="hover:scale-110 duration-700 hover:text-red-800 rounded-full shadow-lg"><SiWhatsapp /></div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 flex-col items-center">
                    <p className="text-center">
                        &copy; 2024 your company all right reserv. 
                    </p>
                    <h2 className="text-center">Hello,we are web developer and I'm working MNC company</h2>

                </div>
                
            </div>
        </footer>
        </>
    )
}
export default Footer;