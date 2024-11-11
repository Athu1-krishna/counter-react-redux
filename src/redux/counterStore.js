import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './counterSlice'
// steps to create logic to redux store

const counterStore = configureStore({
    reducer:{
        counterReducer:counterSlice            
    }
})
export default counterStore