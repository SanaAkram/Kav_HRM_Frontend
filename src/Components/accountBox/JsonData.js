import React from 'react'
import { useEffect } from 'react';
import  Axios  from 'axios';
import { useState } from 'react';
import { Input_RF} from './common';
function JsonData(props) {

const [data,setData] = useState([])
const handleChange =(e) =>{
  const {name,value} = e.target
  var id = name

}
  useEffect(()=>{

        Axios.get('http://127.0.0.1:8000/Kavtech/quiz/category1/level2/')
        .then(res => {
           console.log("Getting data from server :::", res.data)
           setData(res.data)
           console.log(res.data)
        })
        .catch(err=>console.log(err) )
    },[])

  const arr= data.map((data,index)=>{
   
   return(
    <>
  <h1> <br/>{data.title} </h1> <br/>
    
    <div onChange={handleChange} >
    
    <Input_RF 
    type="radio"
    value="option_1" 
    name={data.id}
    // onChange={handleChange}
/> {data.opt_1} 



<br/>

  <Input_RF 
    type="radio" 
    value="option_2" 
    name={data.id}
    /> {data.opt_2}<br/>


  <Input_RF 
    type="radio" 
    value="opt_3" 
    name={data.id} 
    // onChange={handleChange}
     />
    {data.opt_3} <br/>
    
  <Input_RF 
    type="radio" 
    value="opt_4" 
    name={data.id}
    // onChange={handleChange}
        /> {data.opt_4}
</div>

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
