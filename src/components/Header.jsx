import AuthService from "../auth/AuthService";

const Header = () => {


  const handleLogout = () => {
    AuthService.signout()
    window.location.href = "/logout"
  };

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800">Post Website</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
      >
        Logout
      </button>
    </header>
  );
}

export default Header;
