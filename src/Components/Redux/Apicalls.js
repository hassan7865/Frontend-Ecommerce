import { loginfailure, loginstart, loginsuccess, logout } from "./loginRedux";
import { Publicreq } from "../url";
import { removeproduct } from "./cartRedux";

export const login = async (dispatch,information)=>{
    dispatch(loginstart())
    try{
        const res = await Publicreq.post("/auth/login",information)
        dispatch(loginsuccess(res.data))
    }catch(err){
        dispatch(loginfailure())
    }
}
export const logoutuser = (dispatch)=>{
    dispatch(logout())
}
export const emptycart =(dispatch)=>{
    dispatch(removeproduct())
}