import React from 'react'
import { styled } from 'styled-components';
import { RadioGroup, Radio, Button } from '@material-ui/core';
import Timer from './Timer';
import { useEffect, useState } from 'react';
import Records from './records.json'
import JsonData from './JsonData';
import { useNavigate } from "react-router-dom";


import {
    BoldLink,
    TextArea,
    FieldContainer_RF2,
    TimerBox,
    BoxContainer,
    FieldContainer_RF,
    FieldError,
    FormContainer,
    FormSuccess,
    Input_RF,
    Input_RF2,
    Label,
    MutedLink,
    SubmitButton,
    FormError,
    Validity
} from "./common";

export default function TestPage() { 
    const navigate = useNavigate();

    var [data,setData] =useState([])

    const handleSubmit = async(e)=>{
        e.preventDefault()
         console.log(data)
//         const headers ={

//             'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("Access_token")),
//             'Content-Type': 'application/json',
//             'accept': 'application/json',
//           }
//           console.log(headers.Authorization)
          
//     const response = await axios
//     .post("http://127.0.0.1:8000/Kavtech/profile/", data,{
// headers: headers
//     }).catch((err) => {
//       console.log(err)
// });
// console.log(response)









    }
    const  getResult=(id,value)=> {
        data={id,value}
        setData((prevData)=>{
            return [...prevData,data]
        })
   }
    
    return (
        <>
<br/>
<FieldContainer_RF> 

    <BoxContainer> You have total 10 numbers of Questions.</BoxContainer>

<BoxContainer >
    <br/>
    <TimerBox> 
    <Timer/> 
    </TimerBox>

</BoxContainer>

<br/>
<h1 style={{color:"red" , padding:"34px 0px 0px"}}> Rendering 100 questions from a server!! </h1>
<div style={{color:"blue" , padding:"34px"}}>

 





<JsonData result={getResult}/>
<SubmitButton type='submit' onClick={handleSubmit}>Submit</SubmitButton>


</div>
</FieldContainer_RF>
<br/>

</>
)
  
  }