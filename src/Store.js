import {configureStore} from '@reduxjs/toolkit'
import AvailableBalanceReducer from './Slices/AvailableBalance'
import ExpenseReducer from './Slices/Expenses'
import IncomeReducer from './Slices/Income'
import UserReducer from './Slices/User'

export const store=configureStore({
    reducer: {
        expense: ExpenseReducer,
        income:IncomeReducer,
        user: UserReducer
    }
})