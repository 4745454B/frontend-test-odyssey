import classes from './Header.module.scss'
import { useDispatch } from 'react-redux';
import { logout } from '../../../store/userSlice.js';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../store/userSlice.js';
import { Navigate } from 'react-router-dom';


export default function Header(){
    const user = useSelector(selectUser); 

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <>
            Header
            {user ? <button onClick={ handleLogout }>Logout</button> : <a href="/home">Login</a> }
        </>
    );
}