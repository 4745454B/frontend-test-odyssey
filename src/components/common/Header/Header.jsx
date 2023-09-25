import classes from './Header.module.scss'
import HeaderView from './components/HeaderView.jsx';
import { useDispatch } from 'react-redux';
import { logout } from '../../../store/userSlice.js';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../store/userSlice.js';

export default function Header(){
    const user = useSelector(selectUser); 

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <>
            <header>
                <div className={ classes.header_view_container }>
                    <a href="/home">
                        <img draggable={ false } className={ classes.logo } src="./images/react-logo.png" alt="React Logo" />
                    </a>
                    <HeaderView />
                </div>
                {user ? <a className={ classes.logout } onClick={ handleLogout }>Logout</a> : <a className={ classes.logout } href="/home">Login</a> }
            </header>
        </>
    );
}