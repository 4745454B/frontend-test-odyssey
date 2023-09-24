import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: (localStorage.getItem('user')) ? localStorage.getItem('user') : null,
        error: null
    },
    reducers: {
        login: (state, action) => {
            
            if(process.env.REACT_APP_USERNAME == action.payload.name && process.env.REACT_APP_PASSWORD == action.payload.password) {
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