
import BlogList from '../components/BlogList';

const Home = () => {
  
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Home</h1>
        <BlogList />
      </div>
    </div>
  );
}

export default Home;
