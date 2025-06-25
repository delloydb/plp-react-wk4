### plp-react-wk4
A full-stack blogging platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This project demonstrates CRUD operations, RESTful API design, state management with React Context, and seamless integration between front-end and back-end components.

## 🚀 Features
- Create, Read, Update, Delete blog posts
- Manage blog categories
- MongoDB + Mongoose database
- REST API with Express.js
- React front-end with Vite
- State management using Context API
- API communication via Axios
- Error handling and loading states

## 📁 Directory Structure
```
mern-blog-app/
├── client/            # React front-end
│   ├── components/    # Navbar, PostCard
│   ├── context/       # Global PostContext
│   ├── hooks/         # Custom hook: useApi
│   ├── pages/         # PostList, PostDetail
│   ├── services/      # Axios API functions
│   ├── App.jsx
│   ├── main.jsx
│   └── router.jsx
├── server/            # Node/Express back-end
│   ├── config/        # DB connection
│   ├── controllers/   # Logic for posts/categories
│   ├── middleware/    # Error handling
│   ├── models/        # Post, Category schemas
│   ├── routes/        # Express routes
│   └── server.js
├── README.md
```

## 🛠 Setup Instructions

### Prerequisites
- Node.js v18+
- MongoDB running locally or on Atlas

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd mern-blog-app
```

### 2. Set Up the Server
```bash
cd server
cp .env.example .env
npm install
npm run dev
```

### 3. Set Up the Client
```bash
cd client
cp .env.example .env
npm install
npm run dev
```

### Environment Variables
#### client/.env.example
```
VITE_API_URL=http://localhost:5000/api
```
#### server/.env.example
```
MONGO_URI=mongodb://localhost:27017/mern_blog
PORT=5000
```

## 🔗 API Endpoints
### Posts
- `GET /api/posts`
- `GET /api/posts/:id`
- `POST /api/posts`
- `PUT /api/posts/:id`
- `DELETE /api/posts/:id`

### Categories
- `GET /api/categories`
- `POST /api/categories`

## 📸 Screenshots
Add screenshots here showing:
- Home page with list of posts
- Single post view
- Form to create/edit posts

## 📦 Deployment
You can deploy the front-end on **Vercel**, **Netlify**, or **GitHub Pages**, and the back-end on **Render**, **Railway**, or **Heroku**.

## 👨‍🏫 License
This project is for educational purposes as part of a MERN stack assignment.

---
Feel free to fork and extend this project!
