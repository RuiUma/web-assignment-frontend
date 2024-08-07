import Cookies from "js-cookie";
const AuthService = {
    isAuthenticated() {
      return !!localStorage.getItem("session_token") || !!Cookies.get("session_token");
    },
    authenticate(session_token) {
      this.isAuthenticated = true;
      localStorage.setItem("session_token", session_token);
      Cookies.set("session_token", session_token);
    },
    signout() {
      this.isAuthenticated = false
      localStorage.removeItem("session_token");
      Cookies.remove("session_token");
    }
  };
  
  export default AuthService;