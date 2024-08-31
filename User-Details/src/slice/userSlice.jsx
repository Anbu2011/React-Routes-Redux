import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    users : [
        {id:1 , name:"Ajay" , email:"ajay2@gmail.com", college:"cit", passedOut:2024},
        { id: 2, name: "Bala", email: "bala2@gmail.com", college: "MIT", passedOut: 2023 },
        { id: 3, name: "Charan", email: "charan3@gmail.com", college: "IIT", passedOut: 2024 },
        { id: 4, name: "Divya", email: "divya4@gmail.com", college: "NIT", passedOut: 2021 },
        { id: 5, name: "Elan", email: "elan5@gmail.com", college: "VIT", passedOut: 2020 },
        { id: 6, name: "Farhan", email: "farhan6@gmail.com", college: "CIT", passedOut: 2022 },
        { id: 7, name: "Geeta", email: "geeta7@gmail.com", college: "MIT", passedOut: 2023 },
        { id: 8, name: "Hari", email: "hari8@gmail.com", college: "IIT", passedOut: 2024 },
        { id: 9, name: "Isha", email: "isha9@gmail.com", college: "NIT", passedOut: 2021 },
        { id: 10, name: "John", email: "john10@gmail.com", college: "VIT", passedOut: 2020 }
    ],
}

export const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{}
})

export const selectUsers = (state) => state.usersInfo.users;

export default userSlice.reducer;