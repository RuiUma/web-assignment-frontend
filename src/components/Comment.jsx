import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
      <p className="text-gray-700">{comment}</p>
    </div>
  );
}

export default Comment;
