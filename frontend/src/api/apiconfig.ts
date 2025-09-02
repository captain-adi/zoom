import axiosR from "axios"


const axios = axiosR.create({
    baseURL : "http://localhost:5000/api",
    withCredentials : true
})

export default axios;