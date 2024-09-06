import { configureStore } from '@reduxjs/toolkit'
import userDetailsReducer from '../slice/userSlice.jsx'

const store = configureStore({
    reducer:{
        //store
        usersInfo: userDetailsReducer,
    }
})

export {store};