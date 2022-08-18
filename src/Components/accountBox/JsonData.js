import React from 'react'
import { useEffect } from 'react';
import  Axios  from 'axios';
import { useState } from 'react';
import { Input_RF, Input_RF2 } from './common';
function JsonData() {

const [data,setData] = useState([])


const handleChange =(e) =>{
  const {name,value} = e.target
   console.log(name, value)

}
    useEffect(()=>{


        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
           console.log("Getting data from server :::", res.data)
           setData(res.data)
        })
        .catch(err=>console.log(err) )
    },[])


const arr= data.map((data,index)=>{
   
   return(
    <>

<h1> <br/>Question {data.id} </h1> <br/>


    <Input_RF 
    type="radio"
    value="option_a" 
    name={data.id} 
    onChange={handleChange}

/>{data.title} <br/>


    <Input_RF 
    type="radio" 
    value="option_b" 
    name={data.id} 
    onChange={handleChange} /> {data.body}<br/>


    <Input_RF 
    type="radio" 
    value="option_a" 
    name={data.id} 
    onChange={handleChange} />{data.title} <br/>


    <Input_RF 
    type="radio" 
    value="option_b" 
    name={data.id} 
    onChange={handleChange}
  
    /> {data.body}
    </>)})
  return (
    <div style={{color:"black" , padding:"34px"}}>
         <div>
      </div>

      {arr}




    </div>
  )
}

export default JsonData
