import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const AdminDashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return; // Do nothing while loading
    if (!session) router.push('/admin/login'); // Redirect to login if not authenticated
  }, [session, status, router]);

  if (status === 'loading') {
    return <div>Loading...</div>; // Loading state
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <p>Welcome, {session.user.name}!</p>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Manage Your Blog</h2>
        <ul className="mt-4 space-y-2">
          <li>
            <a href="/admin/posts" className="text-blue-400 hover:underline">
              Manage Posts
            </a>
          </li>
          <li>
            <a href="/admin/categories" className="text-blue-400 hover:underline">
              Manage Categories
            </a>
          </li>
          <li>
            <a href="/admin/tags" className="text-blue-400 hover:underline">
              Manage Tags
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;