import axios from "axios";
import React, { useEffect, useState } from "react";



const DataAdd = () =>{
    
    const [myData,setMyData] =useState([]);


    useEffect(()=>{

        axios
        .get('https://fakestoreapi.com/products/category/jewelery')
        .then((res)=> setMyData(res.data))
    },[])

    return(
        <>
        <h1>Axios  Tutorials Data will Be Render Here</h1>
         {
            myData.map((post)=>{

                const[id,title,description] =post;
                return <div className="" key={id}>
                    <h2>{title}</h2>
                    <p>{description}</p>

                </div>
            })
         }
        </>
    )
}
export default DataAdd;