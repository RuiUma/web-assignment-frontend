import AuthService from '../auth/AuthService';
import { Navigate  } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    return AuthService.isAuthenticated ? children : <Navigate to="/login" />;
  };

export default PrivateRoute;