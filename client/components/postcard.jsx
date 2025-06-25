// components/PostCard.jsx
export default function PostCard({ post }) {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-700">{post.content.slice(0, 100)}...</p>
    </div>
  );
}
