import classes from './Login.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/userSlice.js';
import { useRef } from 'react';

export default function Login() {
    const username = useRef();
    const password = useRef();

    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(login({
            name: username.current.value ?? null, 
            password: password.current.value ?? null
        }));
    }

    return (
        <form onSubmit={ (e) => e.preventDefault() } className={ classes.login_form }>
            <h1>Login</h1>
            <input ref={ username } type="text" placeholder="Username" />
            <input ref={ password } type="password" placeholder="Password" />
            <button onClick={ handleLogin }>Login</button>
            {user.error ? <div className={ classes.error }>{ user.error }</div> : null}
        </form>
    )
}