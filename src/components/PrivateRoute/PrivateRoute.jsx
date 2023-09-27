import { Navigate } from "react-router-dom";
import useAuth from "../../auth.js";
import { useSelector } from "react-redux";

export default function PrivateRoute({ children }) {   
    const token = useSelector(state => state.user.token);
    return useAuth(token) ? children : <Navigate to="/login" />;
}