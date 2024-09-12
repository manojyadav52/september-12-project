import React from "react";
import htms from '../pictures/html2.png';
import cs from '../pictures/css2.jpeg';
import javascrip from '../pictures/javaScript2.png';
import reacts from '../pictures/Reactjs.jpeg';
import exp from '../pictures/Expressjs.jpeg';
import tail from '../pictures/Tailwind3.png';

const Exprience = () => {


    const logos = [
        {
            id: 1,
            picture: htms,
            name: 'HTML',
            para: 'Here I am created webpages for the help of the html and  created to dynamic webpages '

        },
        {
            id: 2,
            picture: cs,
            name: 'CSS',
            para: 'Here We are created webpages and designed to webpage for the beutification will be render after some times'
        },
        {
            id: 3,
            picture: javascrip,
            name: 'Java Script',
            para: 'JavaScript is a Scripting language and programming language bcs both side will be working for ex node and expr'

        },

        {
            id: 4,
            picture: reacts,
            name: 'React JS',
            para: 'React js is a server side programming language with the help of the react language and created dynamic pages '
        },
        {
            id: 5,
            picture: exp,
            name: 'Express JS',
            para: 'Express js we have  to use and  create webpages and manage deta for the backend loanguage is  most comanlly use and '
        },
        {
            id: 6,
            picture: tail,
            name: 'Tailwind CSS',
            para: 'Tailwind css uses large liberary for the most and power full in react js'
        }
    ]

    return (
        <>
            <div className="max-w-screen-2xl p-10 mt-10" name='Exprience'>
                <div>
                    <h1 className="text-3xl text-bold px-4 underline text-pink-900">EXPRIENCE</h1>
                </div>
                <h1 className="text-xl mt-4 ">I have 6 Month of Exprience in below technologies.</h1>

            </div>
            {/* Here will be  created my working exprience language */}


            <div className="max-w-[1340px] mx-auto p-5 py-8 px-4 ">
                <div className="grid md:grid-cols-4 py-5 px-8 pb-5 gap-5" >
                    {
                        logos.map((imgs, id) => {
                            return  <div className="bg-orange-200 text-xl p-5 shadow-lg rounded hover:scale-110 duration-700 ">
                                    <img className="" src={imgs.picture} alt="something is here" />
                                    <h1 className="text-center text-2xl text-green-900">{imgs.name}</h1>
                                    <p className="text-justify">{imgs.para}</p>

                                </div>
                            

                        })
                    }

                </div>


            </div>

        </>
    )
}
export default Exprience;