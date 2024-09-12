import React from "react";
import javascript from '../pictures/js.png';
import reacts from '../pictures/Reactjs.jpeg';
import exp from '../pictures/Expressjs.jpeg';
import tail from '../pictures/Tailwind3.png';


const Portfolio = () => {

    const cardItems = [
        {
            id: 1,
            logo: javascript,
            name: 'javaScript'
        },
        {
            id: 2,
            logo: reacts,
            name: 'React JS'

        },
        {
            id: 3,
            logo: tail,
            name: 'Tailwind CSS'
        },
        {
            id: 4,
            logo: exp,
            name: 'Express JS'
        }
    ]

    return (
        <div name='Portfolio'>
            <div className="max-w-screen-2xl py-20">
                <div>
                    <h1 className="text-3xl font-bold pb-5 px-2">PortFolio</h1>
                    <a href="#" className="underline">Future of project</a>
                </div>


                {/* Here Rendring some other content and show webpages */}


                <div className="max-w-screen-2xl container mx-auto grid md:grid-cols-4 sm:text-center gap-5 mt-10">
                    {
                        cardItems.map((logo, id) => {
                            return (
                               
                                    <div key={id} className="shadow-lg overflow-hidden w-full">
                                        <img src={logo.logo} alt="javascript logo"
                                            className="text-center items-center justify-center hover:scale-105 duration-500" />
                                            <h1>{logo.name}</h1>
                                            <p className="px-2 text-justify py-5 pb-5">Here code hands on writing here if you have any query don't hessitate please fear free to ask </p>
                                            <div className="flex gap-8 justify-center">
                                                <div>
                                                <button className="text-center bg-green-600 px-4 text-white py-2" type="submit">Video</button>
                                                </div>
                                                <div>
                                                    <button className="text-center bg-blue-700 px-4 text-white py-2" type="submit">Source Code</button>
                                                </div>
                                            </div>

                                    </div>
                               
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Portfolio;