import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { restfulPost } from '../requests/request';

const UpdatePost = () => {
    const { id } = useParams(); // Extract id from URL parameters
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (!id) {
            setError('Post ID is missing');
            return;
        }

        // Fetch existing post details if needed
        const fetchPostDetails = async () => {
            try {
                const response = await restfulPost('/api/assignment2/restfulApi/posts/getPostContent.php',{
                    id: id
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch post details');
                }
                const data = await response.json();
                setTitle(data.title);
                setContent(data.content);
            } catch (err) {
                setError('Error fetching post details');
            }
        };

        fetchPostDetails();
    }, [id]);

    const updatePost = async () => {
        if (!title || !content) {
            setMessage('Title and content are required.');
            return;
        }

        try {
            const response = await restfulPost('/api/assignment2/restfulApi/posts/update.php', {
                id: id,
                title,
                content,
            });

            const data = await response.json();
            console.log(data);
            
            if (response.ok) {
                setMessage(data.message || 'Post updated successfully!');
            } else {
                setMessage(data.message || 'Failed to update post.');
            }
        } catch (error) {
            setMessage('An error occurred while updating the post.');
        }
    };

    return (
        <div className="max-w-xl mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-5">Update Post</h2>
            {error && <p className="text-red-500">{error}</p>}
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mb-4"
            ></textarea>
            <button
                onClick={updatePost}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Update Post
            </button>
            {message && <p className="mt-4 text-green-500">{message}</p>}
        </div>
    );
};

export default UpdatePost;
