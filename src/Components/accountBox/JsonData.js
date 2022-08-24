import React from 'react'
import { useEffect } from 'react';
import  Axios  from 'axios';
import { useState } from 'react';
import { Input_RF} from './common';
function JsonData(props) {

const [data,setData] = useState([])
const handleChange =(e) =>{
  const {name,value} = e.target
  props.result(name, value)

}
  useEffect(()=>{

        Axios.get('http://127.0.0.1:8000/Kavtech/quiz/1/')
        .then(res => {
           console.log("Getting data from server :::", res.data)
           setData(res.data)
           console.log(res.data)
        })
        .catch(err=>console.log(err) )
    },[])

  const arr= data.slice(0,5).map((data,index)=>{
   
   return(
    <>
  <h1> <br/>{data.questions[0].title} </h1> <br/>
    <Input_RF 
    type="radio"
    value="option_a" 
    name={data.questions}
    onChange={handleChange}
/> {data.questions[0].opt_1} <br/>


  <Input_RF 
    type="radio" 
    value="option_b" 
    name={data.questions}
    onChange={handleChange} /> {data.questions[0].opt_2}<br/>


  <Input_RF 
    type="radio" 
    value="option_a" 
    name={data.questions[0]} 
    onChange={handleChange} />{data.questions[0].opt_3} <br/>
    
  <Input_RF 
    type="radio" 
    value="option_b" 
    name={data.questions[0]}
    onChange={handleChange}
        /> {data.questions[0].opt_4}

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
