import { NextApiRequest, NextApiResponse } from 'next';
import { getCategories, addCategory, updateCategory, deleteCategory } from '../../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case 'GET':
            const categories = await getCategories();
            res.status(200).json(categories);
            break;
        case 'POST':
            const newCategory = await addCategory(req.body);
            res.status(201).json(newCategory);
            break;
        case 'PUT':
            const updatedCategory = await updateCategory(req.body);
            res.status(200).json(updatedCategory);
            break;
        case 'DELETE':
            await deleteCategory(req.body.id);
            res.status(204).end();
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}