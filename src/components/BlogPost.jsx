
const BlogPost = ({ post }) => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
        <p className="text-lg text-gray-700 leading-relaxed">{post.content}</p>
      </div>
    </div>
  );
}

export default BlogPost;
