import { GetStaticProps } from 'next';
import Link from 'next/link';
import { Post } from '../types';
import { getPosts } from '../lib/db';

interface Props {
  posts: Post[];
}

const Home: React.FC<Props> = ({ posts }) => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-5">
      <h1 className="text-4xl font-bold mb-5">Latest Gaming Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post) => (
          <div key={post.slug} className="bg-gray-800 rounded-lg p-5">
            <Link href={`/post/${post.slug}`}>
              <a>
                <img src={post.thumbnail} alt={post.title} className="rounded-lg mb-3" />
                <h2 className="text-2xl font-semibold">{post.title}</h2>
                <p className="text-gray-400">{post.excerpt}</p>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-400">{'★'.repeat(post.rating)}</span>
                  <span className="text-gray-400 ml-2">({post.rating}/5)</span>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
  };
};

export default Home;