import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import { getAuthorPosts, getAuthorDetails } from '../../lib/db';
import Layout from '../../components/Layout';
import Post from '../../components/Post';

interface AuthorProps {
  author: {
    username: string;
    bio: string;
    avatar: string;
  };
  posts: Array<{
    title: string;
    slug: string;
    thumbnail: string;
    description: string;
    rating: number;
  }>;
}

const AuthorPage = ({ author, posts }: AuthorProps) => {
  return (
    <Layout>
      <div className="p-6 bg-gray-900 text-white">
        <div className="flex items-center mb-4">
          <img src={author.avatar} alt={author.username} className="w-16 h-16 rounded-full mr-4" />
          <h1 className="text-3xl font-bold">{author.username}</h1>
        </div>
        <p className="mb-6">{author.bio}</p>
        <h2 className="text-2xl font-semibold mb-4">Posts by {author.username}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <Post key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { username } = context.params!;
  const author = await getAuthorDetails(username as string);
  const posts = await getAuthorPosts(username as string);

  return {
    props: {
      author,
      posts,
    },
  };
};

export default AuthorPage;