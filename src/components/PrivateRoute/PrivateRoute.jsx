import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectUser } from "../../store/userSlice.js";

export default function PrivateRoute({ children }) {   
    const user = useSelector(selectUser); 
    return user ? children : <Navigate to="/login" />;
}