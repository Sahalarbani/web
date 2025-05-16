import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      setError(result.error);
    } else {
      router.push('/admin');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl text-center text-neon-green mb-4">Admin Login</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <div className="mb-4">
          <label className="block text-neon-blue mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 bg-gray-700 border border-neon-blue rounded focus:outline-none focus:ring-2 focus:ring-neon-blue"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-neon-blue mb-2" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 bg-gray-700 border border-neon-blue rounded focus:outline-none focus:ring-2 focus:ring-neon-blue"
            required
          />
        </div>
        <button type="submit" className="w-full bg-neon-green text-gray-900 font-bold py-2 rounded hover:bg-neon-blue transition duration-300">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;