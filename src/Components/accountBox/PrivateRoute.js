import { Route,Navigate, Outlet } from 'react-router-dom';
import { getToken } from './LocalStorageServices';
// import { useContext, useState, useEffect, React } from 'react';


const  PrivateRoute = () =>{
    console.log("Private")
    
const access_key = getToken()

console.log(access_key)

        return(
            access_key? <Outlet/> : <Navigate to='/LoginForm'/>
            )

}
export default PrivateRoute