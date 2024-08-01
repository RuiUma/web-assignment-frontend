const AuthService = {
    isAuthenticated: false,
    authenticate() {
      this.isAuthenticated = true;
      setTimeout(() => {}, 100); // fake async
    },
    signout() {
      this.isAuthenticated = false;
      setTimeout(() => {}, 100);
    }
  };
  
  export default AuthService;