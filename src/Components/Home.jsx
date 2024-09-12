import React from "react";
import img from '../pictures/bg2.avif';
import { ReactTyped } from "react-typed";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import { PiTelegramLogo } from "react-icons/pi";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiReactjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
const Home = () => {


    return (
        <>
            <div className="max-w-[1340px] container mx-auto  px-4 my-20" name='Home'>
                <div className="grid md:grid-cols-2 top-5 px-10 order-2">
                    <div>
                        <span className="text-2xl">Wellcome to my Feed</span>
                        <h1>Hello, I am   <span className="text-red-700 text-2xl font-bold">
                            
                        <ReactTyped
                            
                            strings={[
                            "React Developer",
                            "Node Developer",
                            "Frontend Developer",
                            "Backend Developer",
                            
                            ]}
                            typeSpeed={40}
                             backSpeed={40}
                             loop={true}
                        />

                            </span></h1> 

                    <br />
                    <br />
                        <p className="text-xl px-2 py-2 top-5 text-justify">"Being a developer is not just about writing code that works; it's about writing code that is elegant, efficient, and maintainable. The real beauty of code lies in its simplicity. Strive to make your code understandable, not just to the computer, but to your future self and others who may work on it. Always think ahead and design your solutions with scalability in mind. The best code is the one that doesn’t just solve today’s problems but is adaptable enough to handle tomorrow’s challenges."</p>
                    </div>
                    <div className="order-1">
                        <img src={img} alt="" className="sm:w-full"/>
                    </div>

                   

                </div>


                <div className="max-w-[1340px] container mx-auto text-2xl font-bold mt-4 mb-3 py-5 grid md:grid-cols-2 justify-between ">
                        <div>
                        <h1>Connent ME</h1>
                        <ul className="flex gap-5 py-5 sm:items-center">
                        
                           <a href="https://www.facebook.com/login/device-based/regular/login/?login_attempt=1&lwv=100" target="blank"> <FaFacebookF className=" hover:text-red-800 hover:scale-110 duration-500"/> </a>
                          <a href="https://www.instagram.com/manoj_yadav_1005/" target="blank" > <IoLogoInstagram className=" hover:text-red-800"/></a> 
                           <a href="https://web.whatsapp.com/" target="blank" > < FaWhatsapp className=" hover:text-red-800"/> </a>
                            <PiTelegramLogo className=" hover:text-red-800"/>

                        </ul>
                        </div>

                        <div className="text-3xl mt-5">
                            <h1> current working</h1>
                            <ul className="flex gap-x-5 px-5 py-5">
                                <li className=" rounded-full hover:scale-110 duration-500 hover:text-red-800 "><SiExpress /></li>
                                <li><FaNode className="font-bold hover:scale-110 duration-700 hover:text-red-800 "/></li>
                                <li><RiTailwindCssFill className=" hover:scale-110 duration-700 hover:text-red-800"/></li>
                                <li><RiReactjsFill  className="font-bold hover:scale-110 duration-700 hover:text-red-800"/></li>
                                <SiMongodb  className="font-bold hover:scale-110 duration-700 hover:text-red-800"/>
                            </ul>

                            <div>

                            </div>
                        </div>

                     
                       


                    </div>

            </div>
            <br />
            <hr />

        </>
    )
}
export default Home;