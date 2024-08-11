import { useState } from 'react';

const CommentForm = ({ addComment }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(comment);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows="4"
        placeholder="Write your comment..."
      />
      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Add Comment
      </button>
    </form>
  );
}

export default CommentForm;