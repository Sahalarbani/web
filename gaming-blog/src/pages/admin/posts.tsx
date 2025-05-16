import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { Post } from '../../types';
import { fetchPosts, deletePost } from '../../lib/db';

const AdminPosts = () => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      const fetchedPosts = await fetchPosts();
      setPosts(fetchedPosts);
      setLoading(false);
    };

    loadPosts();
  }, []);

  const handleDelete = async (id: string) => {
    await deletePost(id);
    setPosts(posts.filter(post => post.id !== id));
  };

  if (loading) return <div>Loading...</div>;

  if (!session || session.user.role !== 'admin') {
    return <div>You do not have permission to view this page.</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-white">Manage Posts</h1>
      <table className="min-w-full mt-4">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left text-gray-300">Title</th>
            <th className="px-4 py-2 text-left text-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id} className="border-b border-gray-700">
              <td className="px-4 py-2 text-gray-200">{post.title}</td>
              <td className="px-4 py-2">
                <button
                  onClick={() => handleDelete(post.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <a href="/admin/posts/new" className="text-blue-500 hover:underline">
          Add New Post
        </a>
      </div>
    </div>
  );
};

export default AdminPosts;