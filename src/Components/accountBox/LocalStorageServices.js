const storeToken = (value) =>{
    if (value){

        const {access,refresh}= value;

        console.log("Token Stored");
        localStorage.setItem('Access_token', JSON.stringify(access))
        localStorage.setItem('Refresh_token', JSON.stringify(refresh))
    }
}
const getToken =()=>
    
    {

        let access_token= localStorage.getItem('Access_token')

        return access_token;
    }

const removeToken = () =>{
    localStorage.removeItem('access_token')
}
export {storeToken,getToken,removeToken}
