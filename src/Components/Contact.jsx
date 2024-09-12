import React, { useState } from "react";


const Contact =()=>{

    const [form,setForm] = useState({});

    const inputHandlar =(e)=>{
        
        console.log(e);
      console.log( e.target.value,e.target.name );
      setForm({
          ...form,
        [e.target.name]: e.target.value
      })
    }

   const handleSubmit =(e)=>{
    //    e.preventDefault();
    console.log(form);
   }


    return(
    <div name='Contact'>
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
            <h1 className="text-3xl font-bold ">CONTACT ME</h1>
            <span>Please fill out the form below to contact me</span>

            <div className="flex flex-col items-center justify-center mt-5">
                <p>{JSON.stringify(form)}</p>
                <form action="https://getform.io/f/amdpxrjb" method="POST" className="bg-slate-200 w-96 py-8 px-6 rounded" onSubmit={handleSubmit}>

                    <span className="font-semibold text-xl py-8 pb-5">Send your Message </span>
                    <div className="flex flex-col mb-4 ">

                        <label className="block text-gray-700 " htmlFor="name">Full Name:</label>
                        <input type="name"
                         name='name'
                         placeholder="Enter your full Name" 
                         onChange={inputHandlar}
                         className="shadow  border rounded  py-2 px-3 text-gray-700 leading-tight"
                         /> 

                    </div>

                    <div className="flex flex-col mb-4 ">

                        <label className="block text-gray-700 " htmlFor="name">Email Address:</label>
                        <input type="email"
                         name='email'
                         placeholder="Enter your email address" 
                         onChange={inputHandlar}
                         className="shadow  border rounded  py-2 px-3 text-gray-700 leading-tight"
                         /> 

                    </div>


                    <div className="flex flex-col mb-4 ">

                        <label className="block text-gray-700 " htmlFor="name">Password</label>
                        <input type="password"
                         name='password'
                         placeholder="Enter your password" 
                         onChange={inputHandlar}
                         className="shadow  border rounded  py-2 px-3 text-gray-700 leading-tight"
                         /> 

                    </div>


                    <div className="flex flex-col mb-4 ">

                        <label className="block text-gray-700 " htmlFor="name">Enter Your Contact</label>
                        <input type="contact"
                         name='contact'
                         placeholder="Enter your contact Number" 
                         onChange={inputHandlar}
                         className="shadow  border rounded  py-2 px-3 text-gray-700 leading-tight"
                         /> 

                    </div>


                    <div className="flex flex-col mb-4 ">

                        <label className="block text-gray-700 " htmlFor="name">Message</label>
                        <textarea type="number"
                         name='message'
                         placeholder="Enter your contact Number" 
                         onChange={inputHandlar}
                         className="shadow  border rounded  py-2 px-3 text-gray-700 leading-tight"
                         /> 

                    </div>
                    <div className="text-center justify-center">
                        <input type="submit" name="submit" 
                        className="py-2 px-4 text-white bg-blue-700 rounded hover:bg-green-700" />
                    </div>
                </form>
            </div>

        </div>
        </div>
    )
}
export default Contact;