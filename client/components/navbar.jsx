// components/Navbar.jsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="font-bold">MERN Blog</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Posts</Link>
          <Link to="/create" className="hover:underline">Create</Link>
        </div>
      </div>
    </nav>
  );
}
