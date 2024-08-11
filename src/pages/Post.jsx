import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BlogPost from '../components/BlogPost';
import Comment from '../components/Comment';
import CommentForm from '../components/CommentForm';
import { restfulPost } from '../requests/request';

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPostDetails = async () => {
      const response = await restfulPost('/api/assignment2/restfulApi/posts/getPostContent.php',{
        id: id
      });
      if (!response.ok) {
          throw new Error('Failed to fetch post details');
      }
      const data = await response.json();
      setPost(data);
    }

    const fetchComments = async () => {
      const response = await restfulPost('/api/assignment2/restfulApi/comments/getPostComments.php',{
        id: id
      });
      if (!response.ok) {
          throw new Error('Failed to fetch comments');
      }
      const data = await response.json();
      setComments(data);
      // data.foreash((comment) => {
      //   setComments([...comments, comment]);
      // });
      
    }

    fetchPostDetails();
    fetchComments();
  }, [])



  

  const addComment = async (comment) => {
    // 
     await restfulPost('/api/assignment2/restfulApi/comments/create.php',{
      post_id: id,
      content: comment
    });


    const response = await restfulPost('/api/assignment2/restfulApi/comments/getPostComments.php',{
      id: id
    });
    if (!response.ok) {
        throw new Error('Failed to fetch comments');
    }
    const data = await response.json();
    setComments(data);
    
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto">
        <BlogPost post={post} />

        <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-6">Comments</h2>
          <div className="space-y-6">
            {comments.map((comment, index) => (
              <Comment key={index} comment={comment.content} />
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
