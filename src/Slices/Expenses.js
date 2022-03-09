
import {createSlice} from '@reduxjs/toolkit'

export const ExpenseSlice = createSlice({
    name: 'expenses',
    initialState:[],
    reducers:{
        addexpense:(state,action)=>{
            state.push(action.payload)
        }
    }
});

export const {addexpense} = ExpenseSlice.actions

export default ExpenseSlice.reducer