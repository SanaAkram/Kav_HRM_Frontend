import React, { useContext,useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Checkbox, Input, Link, Radio, RadioGroup } from '@material-ui/core';
import { FormControl,FormControlLabel,FormLabel  } from '@mui/material';
import { useFormik } from "formik";
import axios from "axios";
import { decodeToken, getToken } from "./LocalStorageServices";
import DateTimePicker from "./DateTimePickers";
import {
  FieldContainer_RF2,
  BoxContainer,
  FieldContainer_RF,
  FormContainer,
  Input_RF,
  Input_RF2,
  Input_RF3,
  Label,
  SubmitButton
}
 from "./common";

function RegistrationForm(props) {


   let access_key =getToken()
  let decoded_token = decodeToken()
  console.log(decoded_token.user_id)



const onSubmit = async (values) => {
  const {...data} = values;

const header ={
  'Content-Type': 'application/json',
  'Authorization': 'Bearer ' + String(access_key)
}

const response = await axios
    .post("http://127.0.0.1:8000/Kavtech/profile/", data,{
headers: header
    })
    

    
    .catch((err) => {
      console.log(err)
});

  if (response && response.data) {
    formik.resetForm();
  }
};

const formik = useFormik({
    initialValues: {
      
      first_name: "",
      last_name:"",
      // email: "",
      birth_date:"",
      sched_test:"",
      // job_openings:"",
      experience:"",
      b_degree:"",
      b_institute:"",
      m_degree:"",
      m_institute:"",
      phd_degree:"",
      phd_institute:"",

  },
  validateOnBlur: true,
    onSubmit,

  });
  
  
  
  return (
 
<>

<br/>
<br/>


<FieldContainer_RF>
<FieldContainer_RF2>
<br/>
<br/>
<BoxContainer>
  
  <FormContainer onSubmit={formik.handleSubmit}>   

 <Label>First Name:   <br/>
<Input_RF3
type='text'
name="first_name"
placeholder="Enter Your Last Name"
value={formik.values.first_name}
onChange={formik.handleChange}
onBlur={formik.handleBlur}
required/></Label><br/> 
<Label>Last Name:   
<br/>
<Input_RF3 
type='text'
name="last_name"
placeholder="Enter Your Last Name"
value={formik.values.last_name}
onChange={formik.handleChange}
onBlur={formik.handleBlur}
required />
</Label>
<br/>
{/* <Label>Email:   

<br/>
 <Input_RF3 
 type={'email'}
 name="email"
placeholder="Enter Your Email"
value={formik.values.email}
onChange={formik.handleChange}
onBlur={formik.handleBlur}
required />
</Label>
<br/> */}


<Label>Date of Birth:   
<br/>
 <Input_RF3 
 type='date'
 name="DoB"
placeholder="Enter Your Date of Birth"

value={formik.values.DoB}
onChange={formik.handleChange}
onBlur={formik.handleBlur}
required />
</Label>

<br/>
<h3>Education:</h3>
<Label>Bachlors:  
  <br/> 

 <Input_RF2
 type='text'
 name="b_degree"
onChange={formik.handleChange}
value={formik.values.b_degree}
placeholder="Degree"
 />
 <Input_RF3
 type='text' 
 name="b_institute"
 onChange={formik.handleChange}
 value={formik.values.b_institute}
placeholder="Institute" />
</Label>
<br/>






<Label>Masters:  
  <br/> 
 <Input_RF2
 type={'text'} 
 name="m_degree"
placeholder="Degree"
/>
 <Input_RF3
 type={'text'} 
 name="m_institute"
placeholder="Institute"

/>
</Label>
<br/>
<Label>PHD:  
  <br/> 
 <Input_RF2
 type='text' 
 name="phd_degree"
placeholder="Degree"

/>
 <Input_RF3
 type={'text'} 
 name="phd_institute"
placeholder="Institute"
/>
</Label>
<br/>

<Label>Experience: 
  <br/>
  <select name="experience" onChange={formik.handleChange}  value={formik.values.experience}>
  <option  value="Fresher" >Fresher</option>
  <option  value="1-2 years">1-2 years</option>
  <option   value="2-5 Years">2-5 years</option>
  <option  value="Above 5 years">Above 5 years</option>
</select>
<br/>  
</Label>
<br/>



{/* <Label>Job Openings(Apply For):  */}
  {/* <br/>
   <Checkbox type="checkbox" onChange={formik.handleChange} value="IT" required name="job_openings" /> IT/Infrastructure
  <br/> 
  <Checkbox type="checkbox" onChange={formik.handleChange} value="data_science" name="job_openings" /> Data Science
  <br/>  
  <Checkbox type="checkbox" onChange={formik.handleChange} value="management" name="job_openings" /> management
<br/>    */}

{/* <Input type="input" onChange={formik.handleChange} value={formik.values.job_openings} name="job_openings"/> Data Engineering
 <br/>
</Label>
<br/>
<Label>CV/Resume:  
  <br/> 
 <Input_RF3
 type='file'
 name='file'
placeholder="Enter Your First Name"

required /> */}
{/* </Label> */}
<br/>

<Label>Test Schedule:
  <br/>

  <FormControl required>

  <RadioGroup aria-labelledby="demo-radio-buttons-group-label" 
    defaultValue="now" 
    name="radio-buttons-group">
    <FormControlLabel onChange={formik.handleChange} value="now" name="sched_test" control={<Radio />} label="now" />
    <FormControlLabel onChange={formik.handleChange}  value="later" name="sched_test" control={<Radio />} label="later" />

<DateTimePicker/>
<SubmitButton type="submit"> submit</SubmitButton>


</RadioGroup>
</FormControl>
</Label>
        <br/>
        <br/>
        <br/>
<br/>
{formik.values.first_name}
<br/>
{formik.values.last_name}
<br/>
{formik.values.email}
<br/>
{formik.values.DoB}
<br/>
{formik.values.job_openings}
<br/>
{formik.values.b_degree}

{formik.values.experience}
<br/>
{formik.values.b_institute}
<br/>
{formik.values.sched_test}
<br/>

</FormContainer>
</BoxContainer>
</FieldContainer_RF2>
</FieldContainer_RF>

<br/>
<br/>
<br/>
</>
  );
 }

export default RegistrationForm
