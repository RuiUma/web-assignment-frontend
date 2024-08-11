import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const posts = [
    { id: 1, title: 'First Blog Post' },
    { id: 2, title: 'Second Blog Post' }
  ];

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold mb-6">Blog Posts</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="border-b border-gray-200 pb-2">
            <Link
              to={`/post/${post.id}`}
              className="text-xl text-blue-600 hover:underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
