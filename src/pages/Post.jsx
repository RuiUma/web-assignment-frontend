import { useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogPost from '../components/BlogPost';
import Comment from '../components/Comment';
import CommentForm from '../components/CommentForm';

const Post = () => {
  const { id } = useParams();
  const posts = [
    { id: 1, title: 'First Blog Post', content: 'This is the content of the first post.' },
    { id: 2, title: 'Second Blog Post', content: 'This is the content of the second post.' }
  ];
  const post = posts.find(p => p.id === parseInt(id));
  const [comments, setComments] = useState([]);

  const addComment = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto">
        <BlogPost post={post} />

        <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-6">Comments</h2>
          <div className="space-y-6">
            {comments.map((comment, index) => (
              <Comment key={index} comment={comment} />
            ))}
          </div>
          <div className="mt-8">
            <CommentForm addComment={addComment} />
          </div>
        </div>
      </div>
    </div>
  );
}



export default Post;
