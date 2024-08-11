import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { restfulPost } from "../requests/request";
import AuthService from "../auth/AuthService";
import { Link } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            "email": email, 
            "password": password 
        };

        const response = await restfulPost("/api/assignment2/restfulApi/login.php", data)
            
        const body = await response.json();
        if (body.status == "success") {
            AuthService.authenticate(body.session_token)
            
            navigate('/home');
        }        
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
          <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-indigo-500 text-white font-bold py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75"
              >
                Login
              </button>
            </div>
          </form>
          <p className="text-center text-gray-600 text-sm mt-4">
            Don't have an account? <Link to="/register" className="text-indigo-500 hover:underline">Sign up</Link>
          </p>
        </div>
      </div>

    );
}

export default Login;