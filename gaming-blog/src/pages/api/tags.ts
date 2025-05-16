import type { NextApiRequest, NextApiResponse } from 'next';

const tags = [
  { id: 1, name: 'Action', slug: 'action' },
  { id: 2, name: 'Adventure', slug: 'adventure' },
  { id: 3, name: 'RPG', slug: 'rpg' },
  { id: 4, name: 'Strategy', slug: 'strategy' },
  { id: 5, name: 'Indie', slug: 'indie' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(tags);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}