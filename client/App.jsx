// App.jsx
import { PostProvider } from './context/PostContext';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './router';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <PostProvider>
      <Router>
        <Navbar />
        <main className="container mx-auto mt-6">
          <AppRoutes />
        </main>
      </Router>
    </PostProvider>
  );
}
