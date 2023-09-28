import { createSlice } from "@reduxjs/toolkit";
import bcrypt from 'bcryptjs';
import CryptoJS from "crypto-js";

/**
 * Handles the user state
 * It has two actions: login and logout
 * For the Login:
 * I am using bcrypt to compare the encrypted password with the one stored in the .env file
 * I am using CryptoJS to encrypt the token and store it in the local storage
 * For the logout:
 * I am removing the user and token from the local storage and set the state to null
 */

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: (localStorage.getItem('user')) ? localStorage.getItem('user') : null,
        token: (localStorage.getItem('token')) ? localStorage.getItem('token') : null,
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
                state.token = CryptoJS.AES.encrypt(process.env.REACT_APP_TOKEN, process.env.REACT_APP_SECRET).toString();
                localStorage.setItem('user', state.user.name);
                localStorage.setItem('token', state.token);
            }
            else{
                state.error = "Invalid credentials";
            }
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.error = null;
            localStorage.removeItem('user');
            localStorage.removeItem('token');
        }
    }
})

export const { login, logout } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;