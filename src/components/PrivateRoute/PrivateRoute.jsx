import { Navigate } from "react-router-dom";
import useAuth from "../../auth.js";
import { useSelector } from "react-redux";

/**
 * The PrivateRoute component
 * This component is used to protect routes that require authentication
 */

export default function PrivateRoute({ children }) {   
    const token = useSelector(state => state.user.token);
    return useAuth(token) ? children : <Navigate to="/login" />;
}