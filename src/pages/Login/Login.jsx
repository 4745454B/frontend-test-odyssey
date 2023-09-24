import classes from './Login.module.scss'
import Header from "../../components/common/Header/Header.jsx";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/userSlice.js';
import { useState } from 'react';

export default function Login() {
    const [name, setName] = useState("Admin");
    const [password, setPassword] = useState("123456");

    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleLogin = () => {
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
            {user.error ? <div>{ user.error }</div> : null}
        </>
    )
}