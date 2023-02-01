import axios from "axios";
const BASE_URL = "https://backend-ecommerce-plum.vercel.app/api"
const User = JSON.parse(localStorage.getItem("persist:root"))?.login
const currentuser = User && JSON.parse(User).isUser
const TOKEN = currentuser?.accesstoken
export  const Publicreq = axios.create({
    baseURL:BASE_URL
});

export const userreq = axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
})