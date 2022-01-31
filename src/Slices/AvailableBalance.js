import {createSlice} from '@reduxjs/toolkit'

export const AvailableBalance =createSlice({
    name:'AvailableBalance',
    initialState:{
        value:0,
        state:'idle',
    },
    reducers:{
        addBalance:(state,action)=>{
            
            state.value+=action.payload
        },
        deductBalance:(state,action)=>{
            state.value-=action.payload
        }
    }
})


export const{addBalance,deductBalance}=AvailableBalance.actions

export default AvailableBalance.reducer