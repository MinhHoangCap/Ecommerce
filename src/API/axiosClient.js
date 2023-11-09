import axios from "axios";
import queryString from 'query-string';
// require('dotenv').config()
const axiosClient = axios.create({
    baseURL: import.meta.env.REACT_APP_WORDPRESS_API,
    headers:{
        'content-type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params),

});
axiosClient.interceptors.request.use(async (config)=>{
    return config;
})

axiosClient.interceptors.response.use((response)=>{
    if(response && response.data){
        return response.data;
    }
    return response;

},(error)=>{
    throw error;
})
export default axiosClient;