import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { getPostsByTag } from '../../lib/db';
import Post from '../../components/Post';
import Layout from '../../components/Layout';

const TagPage = ({ posts, tag }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <h1 className="text-4xl font-bold text-neon-green">Posts tagged with "{tag}"</h1>
      <div className="mt-4">
        {posts.length === 0 ? (
          <p className="text-gray-400">No posts found for this tag.</p>
        ) : (
          posts.map((post) => (
            <Post key={post.slug} post={post} />
          ))
        )}
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params;
  const posts = await getPostsByTag(slug as string);

  return {
    props: {
      posts,
      tag: slug,
    },
  };
};

export default TagPage;