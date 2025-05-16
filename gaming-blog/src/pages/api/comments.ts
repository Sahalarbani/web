import { NextApiRequest, NextApiResponse } from 'next';
import { getComments, addComment } from '../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const { postId } = req.query;
        const comments = await getComments(postId);
        res.status(200).json(comments);
    } else if (req.method === 'POST') {
        const { postId, name, email, content } = req.body;
        const newComment = await addComment({ postId, name, email, content });
        res.status(201).json(newComment);
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}