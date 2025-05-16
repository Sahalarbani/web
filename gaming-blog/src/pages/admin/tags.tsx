import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getTags, createTag, deleteTag } from '../../lib/db';
import AdminLayout from '../../components/Layout/AdminLayout';

const TagsPage = () => {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchTags = async () => {
      const fetchedTags = await getTags();
      setTags(fetchedTags);
    };
    fetchTags();
  }, []);

  const handleAddTag = async (e) => {
    e.preventDefault();
    if (newTag.trim()) {
      await createTag(newTag);
      setNewTag('');
      const fetchedTags = await getTags();
      setTags(fetchedTags);
    }
  };

  const handleDeleteTag = async (tagId) => {
    await deleteTag(tagId);
    const fetchedTags = await getTags();
    setTags(fetchedTags);
  };

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-4">Manage Tags</h1>
      <form onSubmit={handleAddTag} className="mb-4">
        <input
          type="text"
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
          placeholder="New Tag"
          className="border p-2 rounded mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Add Tag
        </button>
      </form>
      <ul>
        {tags.map((tag) => (
          <li key={tag.id} className="flex justify-between items-center mb-2">
            <span>{tag.name}</span>
            <button
              onClick={() => handleDeleteTag(tag.id)}
              className="bg-red-500 text-white p-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </AdminLayout>
  );
};

export default TagsPage;