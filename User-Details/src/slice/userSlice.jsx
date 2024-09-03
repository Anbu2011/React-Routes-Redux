import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios';

const initialState = {
    usersArray : [],
    loading : false,
}

export const getUsers = createAsyncThunk('users/getUsers', async() =>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    return response.data
})
export const userSlice = createSlice({
    name:"users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getUsers.pending,(state) =>{
            state.loading = true
        })
        .addCase(getUsers.fulfilled, (state,action) => {
            state.loading = false;
            state.usersArray = action.payload;
        })
        .addCase(getUsers.rejected, (state) =>{
            state.loading = false;
        })
    }
})

export default userSlice.reducer;