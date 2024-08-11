import { Link, useNavigate } from 'react-router-dom';
import { restfulPost } from '../requests/request';
import { useEffect, useState } from 'react';

const BlogList = () => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await restfulPost('/api/assignment2/restfulApi/posts/getAllPostTitles.php');
      const data = await res.json();
      console.log(data);
      setPosts(data)
    };

    fetchPosts();
  }, []);


  const handleEdit = async (id) => {
    console.log(`Editing post with id ${id}`);
    navigate(`/update/${id}`)
  };

  const handleDelete = async (id) => {
    console.log(`Deleting post with id ${id}`);
    const res = await restfulPost('/api/assignment2/restfulApi/posts/delete.php', { id });
    const data = await res.json();
    console.log(data);
  };



  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold mb-6">Blog Posts</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="border-b border-gray-200 pb-2 flex items-center justify-between">
            <Link
              to={`/post/${post.id}`}
              className="text-xl text-blue-600 hover:underline"
            >
              {post.title}
            </Link>
            <div className="space-x-2">
              <button className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600" onClick={() => handleEdit(post.id)}>
                Edit
              </button>
              <button className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600" onClick={() => handleDelete(post.id)} >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>

  );
}

export default BlogList;
