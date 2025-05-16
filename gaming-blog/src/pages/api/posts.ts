import { NextApiRequest, NextApiResponse } from 'next';
import { getPosts, createPost, updatePost, deletePost } from '../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case 'GET':
            const posts = await getPosts();
            res.status(200).json(posts);
            break;
        case 'POST':
            const newPost = await createPost(req.body);
            res.status(201).json(newPost);
            break;
        case 'PUT':
            const updatedPost = await updatePost(req.body);
            res.status(200).json(updatedPost);
            break;
        case 'DELETE':
            await deletePost(req.body.id);
            res.status(204).end();
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}