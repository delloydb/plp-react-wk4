// pages/PostDetail.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPostById } from '../services/api';

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPostById(id).then(setPost);
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
