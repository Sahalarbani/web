import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { getCategories, getPostsByCategory } from '../../lib/db';
import PostPreview from '../../components/Blog/PostPreview';
import Layout from '../../components/Layout';

const CategoryPage = ({ posts, category }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <h1 className="text-4xl font-bold text-neon-green">{category.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {posts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await getCategories();
  const paths = categories.map((category) => ({
    params: { slug: category.slug },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = await getCategories().find((cat) => cat.slug === params.slug);
  const posts = await getPostsByCategory(params.slug);

  return {
    props: {
      posts,
      category,
    },
    revalidate: 10,
  };
};

export default CategoryPage;