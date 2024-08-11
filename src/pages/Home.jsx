
import BlogList from '../components/BlogList';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleCreatePost = () => {
    navigate('/createPost'); // Assuming you have a route for creating posts
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Home</h1>
        
        <div className="flex justify-end mb-4">
          <button 
            onClick={handleCreatePost} 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Create New Post
          </button>
        </div>
        
        <BlogList />
      </div>
    </div>
  );
}

export default Home;
