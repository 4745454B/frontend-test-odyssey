import classes from './Login.module.scss'
import Header from "../../components/common/Header/Header.jsx";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/userSlice.js';
import { useState } from 'react';

export default function Login() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleUsernameInput = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordInput = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = () => {
        dispatch(login({
            name: username, 
            password: password,
            loggedIn: true
        }));
    }

    return (
        <>
            <Header />
            <input onChange={ handleUsernameInput } type="text" placeholder="Username" />
            <input onChange={ handlePasswordInput } type="password" placeholder="Password" />
            <button onClick={ handleLogin }>Login</button>
            {user.error ? <div>{ user.error }</div> : null}
        </>
    )
}