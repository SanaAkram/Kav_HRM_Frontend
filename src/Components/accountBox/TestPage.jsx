import React from 'react'
import { useEffect } from 'react';
import  axios  from 'axios';
import { useState } from 'react';
import {
   Input_RF,
   BoxContainer,
  FieldContainer_RF,
  SubmitButton,
  TimerBox,
  HeaderText
 
  
  } from './common';
import { useFormik } from "formik";
import { decodeToken, getToken } from "./LocalStorageServices";
import Timer from './Timer'

function TestPage(props) {

  const [data,setData] = useState([])
if(getToken){ 
  let decoded_token = decodeToken()
  var user_fk=decoded_token.user_id
}
const handleChange =(e) =>{
  console.log(data)
  const {name,value} = e.target
 
  if(name){
    console.log("THis ",value)  }

  var question =  parseInt(name)


  console.log(question)
  var submitted_ans= value
  
  }
  useEffect(()=>{


        axios.get('http://127.0.0.1:8000/Kavtech/quiz/category1/level1/')
        .then(res => {
           console.log("Getting data from server :::", res.data)
           setData(res.data)
           console.log(res.data)
    
    });
  })


const handleSubmit = async(e)=>{
  e.preventDefault()
   console.log(data)
const response = await axios
.post("http://127.0.0.1:8000/Kavtech/quiz/test/", data,{

}).catch((err) => {
console.log(err)
});
console.log(response)
}

 //Formik
  const arr= data.map((data,index)=>{
  
   return(
    <>



<FieldContainer_RF> 





<h1>
  <br/>Question: {data.title} </h1> <br/>
  <div onChange={handleChange}>
    <Input_RF 
    type="radio"
    value="option_1" 

    name={data.id}
    // onChange={handleChange}
/> {data.opt_1} 

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

</FieldContainer_RF>
 

    </>)})

  return (
<BoxContainer>
<HeaderText> You have total 10 numbers of Questions.</HeaderText>
  <TimerBox> 
  <Timer/> 
  </TimerBox>

      {arr}
  <SubmitButton type='submit' onClick={handleSubmit}>Submit</SubmitButton>

</BoxContainer> 

  )
}

export default TestPage

