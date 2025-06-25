// pages/PostList.jsx
import { useEffect, useState } from 'react';
import { getPosts } from '../services/api';
import PostCard from '../components/PostCard';

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">All Blog Posts</h1>
      {posts.map(post => <PostCard key={post._id} post={post} />)}
    </div>
  );
}
