import AuthService from '../auth/AuthService';
import { Navigate  } from "react-router-dom";


const PrivateRoute = ({ element: Component  }) => {
  const isAuthenticated = AuthService.isAuthenticated()
  console.log(Component );

  
  
    return isAuthenticated ? <Component  /> : <Navigate to="/login" />;
};

export default PrivateRoute;

