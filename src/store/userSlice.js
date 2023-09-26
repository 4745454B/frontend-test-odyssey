import { createSlice } from "@reduxjs/toolkit";
import bcrypt from 'bcryptjs';

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: (localStorage.getItem('user')) ? localStorage.getItem('user') : null,
        error: null
    },
    reducers: {
        login: (state, action) => {
            if(!action.payload.name){
                state.error = "Username is required";
                return;
            }
            if(!action.payload.password){
                state.error = "Password is required";
                return;
            }

            const isPasswordValid = bcrypt.compareSync(action.payload.password, process.env.REACT_APP_PASSWORD);

            if(process.env.REACT_APP_USERNAME === action.payload.name && isPasswordValid) {
                state.user = action.payload;
                state.error = null;
                localStorage.setItem('user', state.user.name);
            }
            else{
                state.error = "Invalid credentials";
            }
        },
        logout: (state) => {
            state.user = null;
            state.error = null;
            localStorage.removeItem('user');
        }
    }
})

export const { login, logout } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;