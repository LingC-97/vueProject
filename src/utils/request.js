import axios from "axios";
import { Message } from "element-ui";

var instance = axios.create()
instance.defaults.baseURL = 'http://localhost:8080/api1';  //配置服务器的地址
// instance.defaults.baseURL = window.g.baseUrl;  //这里不奏效为什么 

// instance.interceptors.request.use(
//     (config)=>{
        
//         return config
//     },
//     (error)=>{
//         return Promise.reject(error)
//     }
// )
// instance.interceptors.response.use(
//     (response)=>{
        
//         return response;
//     },
//     (error)=>{
//         return Promise.reject(error)
//     })

export default instance