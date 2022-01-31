import {configureStore} from '@reduxjs/toolkit';
import AvailableBalance from './Slices/AvailableBalance';

export const store=configureStore({
    reducer: {
        AvailableBalance:AvailableBalance,
    }
})