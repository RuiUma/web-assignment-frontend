import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { restfulPost } from "../requests/requset";
import AuthService from "../auth/AuthService";
const Login = () => {
    // const navigate = useNavigate();
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
            
            window.location.href = "/home";
        }
        
        // navigate("/");
    }
    return (
        <div className="container mx-auto flex justify-center items-center">
            <div className="border m-1 p-2">
                <h1 className="text-3xl">Login page</h1>
                <form onSubmit={handleSubmit} method="post">
                    <input type="email" value={email} name="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} /> <br />
                    <input type="password" value={password} name="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} /> <br /> 
                    <button type="submit"> Submit </button>
                </form>
            </div>
            
        </div>
    );
}

export default Login;