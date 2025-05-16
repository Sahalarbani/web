import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getPostBySlug, getAllPosts } from '../../lib/db';
import { Markdown } from '../../components/Blog/Markdown';
import { CommentSection } from '../../components/Comment/CommentSection';
import { Rating } from '../../components/Rating/Rating';

const PostPage = ({ post }) => {
  const router = useRouter();

  useEffect(() => {
    if (!post) {
      router.push('/404');
    }
  }, [post, router]);

  if (!post) return null;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-neon-green">{post.title}</h1>
      <div className="my-4">
        <img src={post.thumbnail} alt={post.title} className="w-full h-auto rounded-lg" />
      </div>
      <div className="prose prose-invert">
        <Markdown content={post.content} />
      </div>
      {post.gallery && <Gallery images={post.gallery} />}
      {post.video && <VideoEmbed url={post.video} />}
      <Rating postId={post.id} />
      <CommentSection postId={post.id} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostBySlug(params.slug as string);

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
};

export default PostPage;