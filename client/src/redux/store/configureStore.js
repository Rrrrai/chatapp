import { configureStore,Tuple } from "@reduxjs/toolkit"
import userSlice from "../reducerSlices/userSlice"
import boxSlice from "../reducerSlices/boxSlice"
import logger from 'redux-logger'

const store = configureStore({
    reducer:{
        user: userSlice,
        box: boxSlice
    },
    middleware: () => new Tuple(logger)
})

export default store