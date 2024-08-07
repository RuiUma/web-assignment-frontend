import { useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogPost from '../components/BlogPost';
import Comment from '../components/Comment';

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
    <div>
      <BlogPost post={post} />
      <h2>Comments</h2>
      {comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
      <CommentForm addComment={addComment} />
    </div>
  );
}

const CommentForm = ({ addComment }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(comment);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
      <button type="submit">Add Comment</button>
    </form>
  );
}

export default Post;
