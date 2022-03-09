import {createSlice} from '@reduxjs/toolkit'
export const IncomeSlice = createSlice({
    name:'incomes',
    initialState:[],
    reducers: {
        addincome:(state,action)=>{
            state.push(action.payload)
        }
    }
})
export const {addincome}=IncomeSlice.actions
export default IncomeSlice.reducer