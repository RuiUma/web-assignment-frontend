import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
    const navigate = useNavigate();
    
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800">You have logged out</h1>
        <p className="mt-4 text-gray-600">Thank you for using our service. See you again soon!</p>
        <div className="mt-6">
          <button
            onClick={() => navigate('/login')}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Back to Log In
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogoutPage;
