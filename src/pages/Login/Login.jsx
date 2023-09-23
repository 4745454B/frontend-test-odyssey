import classes from './Login.module.scss'
import Header from "../../components/common/Header/Header.jsx";
import { useDispatch } from 'react-redux';
import { login } from '../../store/userSlice.js';
import { useState } from 'react';

export default function Login() {
    const [name, setName] = useState("Admin");
    const [password, setPassword] = useState("123456");

    const dispatch = useDispatch();

    const handleLogin = () => {
        const hardcodedUsername = 'Admin';
        const hardcodedPassword = '123456';
        
        dispatch(login({
            name: name, 
            password: password,
            loggedIn: true
        }));
    }

    return (
        <>
            <Header />
            <button onClick={ handleLogin }>Login</button>
        </>
    )
}