// router.jsx
import { Routes, Route } from 'react-router-dom';
import PostList from './pages/PostList';
import PostDetail from './pages/PostDetail';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PostList />} />
      <Route path="/posts/:id" element={<PostDetail />} />
    </Routes>
  );
}
