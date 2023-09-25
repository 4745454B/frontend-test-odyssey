import classes from './HeaderView.module.scss'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';

export default function HeaderView() {
    const [activePage, setActivePage] = useState(null);
    const location = useLocation();

    useEffect(() => {
        switch(location.pathname)
        {
            case '/home':
                setActivePage('Home');
            break;
            case '/products':
                setActivePage('Products');
            break;
            case '/login':
                setActivePage('Login');
            break;
            default: 
                setActivePage('NoPage');
            break;
        }

    }, [location.pathname])

    return <span className={ classes.header_view_font }>{activePage}</span>
}