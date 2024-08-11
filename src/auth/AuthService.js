import Cookies from "js-cookie";
const AuthService = {
    isAuthenticated() {
      return !!localStorage.getItem("session_token") || !!Cookies.get("session_token");
    },
    authenticate(session_token) {
      localStorage.setItem("session_token", session_token);
      Cookies.set("session_token", session_token);
    },
    signout() {
      localStorage.removeItem("session_token");
      Cookies.remove("session_token");
    }
  };
  
  export default AuthService;