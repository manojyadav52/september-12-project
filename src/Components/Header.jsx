import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { Link } from "react-scroll";


const Header =()=>{
    const nav=[
        {
            id:1,
            text:'Home',
        },
        {
            id:2,
            text:'About',

        },
        {
            id:3,
            text:'Portfolio'
        },
        {
            id:4,
            text:'Exprience',

        },
        {
            id:5,
            text:'Contact'
        }
        
    ]

        const [toggle,setToggle] = useState(false);
    return(
        <>
           <div className="bg-purple-800 p-4" >
            <div className="max-w-[1340px] mx-auto text-center justify-between items-center flex gap-4  ">
                <div className="flex text-white text-3xl">
                    Manoj Yadav
                </div>
                <ul className=" hidden md:flex gap-5 text-white text-1xl  ">
                    
                    {
                        nav.map((items,index)=>{
                            return <div>
                             <li className="hover:scale-105 duration-300 cursor-pointer" id="index">
                                      <Link 
                                      to={items.text}
                                      smooth={true}
                                      duration={500}
                                      offset={-70} 
                                      activeClass="active"
                                      >{items.text}</Link>
                                    </li>
                                    </div>

                        })
                    }
                   

                    {/* <li className="hover:scale-105 duration-300">
                        <Link href="About">About</Link>
                    </li> */}

                    {/* <li className="hover:scale-105 duration-300">
                        <Link href="Portfolio">Portfolio</Link>
                    </li>

                    <li className="hover:scale-105 duration-300">
                        <Link href="Exprience">Exprience</Link>
                    </li> */}

                    {/* <li className="hover:scale-105 duration-300">
                        <Link href="#">Resources</Link>
                    </li> */}
{/* 
                    <li className="hover:scale-105 duration-300">
                        <Link href="Contact">Contact US</Link>
                    </li> */}
                    {/* <li className="hover:scale-105 duration-300">
                       <Link> <button type="submit" className="px-3 py-1 bg-blue-800 border border-full rounded-lg">LOG IN</button>
                       </Link>
                    </li> */}
                </ul>

                {
                    toggle
                     ?
                     <MdClose onClick={()=>setToggle(!toggle)} className="text-white text-2xl md:hidden"/>
                     :
                     <GiHamburgerMenu onClick={()=>setToggle(!toggle)} className="text-white text-2xl md:hidden" />
                }
              

               

            </div>

            {/* Mobile Responsive Design and will be render after some time  */}

            <ul className={`overflow-hidden fixed w-full h-screen text-white text-1xl left-0 mt-[15px]  bg-black ${toggle ? 'left-0' : 'left-[-100%]'} duration-500 `}>

            {
                        nav.map((items,index)=>{
                            return <div>
                             <li className="hover:scale-105 duration-300 cursor-pointer space-y-12 my-5 mx-5 font-semibold hover:border-b-4" id="index">
                                      <Link 
                                      to={items.text}
                                      smooth={true}
                                      duration={500}
                                      offset={-70} 
                                      activeClass="active"
                                      >{items.text}</Link>
                                    </li>
                                    </div>

                        })
                    }
                </ul>

           </div>
        </>
    )
}
export default Header;