import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./Reducer";


const Redux=configureStore({
    reducer:Reducer.reducer
})

export default Redux