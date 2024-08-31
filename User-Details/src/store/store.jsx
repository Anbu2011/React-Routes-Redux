import { configureStore } from '@reduxjs/toolkit'
import useReducer from '../slice/userSlice.jsx'

const store = configureStore({
    reducer:{
        //store
        usersInfo: useReducer,
    }
})

export {store};