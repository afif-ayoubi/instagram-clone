import axios from 'axios';

axios.defaults.baseURL="http://127.0.0.1:8000/api";

export const sendRequest=async ({method,route,body})=>{
    try{
        const response= await axios({
            method:method,
            url:route,
            data:body,
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response;
    }catch(error){
        if(error.response && error.response.status==401){
            localStorage.removeItem("token");
        }
        throw error;
    }
}