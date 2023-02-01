import {createSlice} from '@reduxjs/toolkit'

const loginslice = createSlice({
    name:"login",
    initialState:{
        isUser:null,
        error:false
    },
    reducers:{
        loginstart:(state)=>{
            state.isUser=false
            state.error=false
        },
        loginsuccess:(state,action)=>{
            state.isUser=action.payload
            state.error=false
        },
        loginfailure:(state)=>{
            state.error=true
        },
        logout:(state)=>{
            state.isUser=null
        }
    }
})

export const {loginstart,loginsuccess,loginfailure,logout} = loginslice.actions
export default loginslice.reducer;