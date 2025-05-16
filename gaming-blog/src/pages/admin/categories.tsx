import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getCategories, createCategory, updateCategory, deleteCategory } from '../../lib/db';
import AdminLayout from '../../components/Layout/AdminLayout';

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [editingCategory, setEditingCategory] = useState(null);
  const [editingCategoryName, setEditingCategoryName] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  const handleCreateCategory = async () => {
    if (newCategory) {
      await createCategory(newCategory);
      setNewCategory('');
      const data = await getCategories();
      setCategories(data);
    }
  };

  const handleEditCategory = async () => {
    if (editingCategory && editingCategoryName) {
      await updateCategory(editingCategory, editingCategoryName);
      setEditingCategory(null);
      setEditingCategoryName('');
      const data = await getCategories();
      setCategories(data);
    }
  };

  const handleDeleteCategory = async (id) => {
    await deleteCategory(id);
    const data = await getCategories();
    setCategories(data);
  };

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold text-white">Manage Categories</h1>
      <div className="mt-4">
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="New Category"
          className="p-2 rounded bg-gray-800 text-white"
        />
        <button onClick={handleCreateCategory} className="ml-2 p-2 bg-blue-600 rounded">
          Add Category
        </button>
      </div>
      <ul className="mt-4">
        {categories.map((category) => (
          <li key={category.id} className="flex items-center justify-between p-2 bg-gray-700 rounded mt-2">
            {editingCategory === category.id ? (
              <>
                <input
                  type="text"
                  value={editingCategoryName}
                  onChange={(e) => setEditingCategoryName(e.target.value)}
                  className="p-2 rounded bg-gray-800 text-white"
                />
                <button onClick={handleEditCategory} className="ml-2 p-2 bg-green-600 rounded">
                  Save
                </button>
              </>
            ) : (
              <>
                <span className="text-white">{category.name}</span>
                <div>
                  <button onClick={() => { setEditingCategory(category.id); setEditingCategoryName(category.name); }} className="ml-2 p-2 bg-yellow-600 rounded">
                    Edit
                  </button>
                  <button onClick={() => handleDeleteCategory(category.id)} className="ml-2 p-2 bg-red-600 rounded">
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </AdminLayout>
  );
};

export default CategoriesPage;