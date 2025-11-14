import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  createBrowserRouter,
  RouterProvider,
} from 'react-router';
import PostsListPage from './routes/PostsListPage.jsx';
import HomePage from './routes/HomePage.jsx';
import SinglePostPage from './routes/SinglePostPage.jsx';
import Register from './routes/RegisterPage.jsx';
import LoginPage from './routes/LoginPage.jsx';
import Write from './routes/Write.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/post',
    element: <PostsListPage />,
  },
  {
    path: '/:slug',
    element: <SinglePostPage />,
  },
  {
    path: '/write',
    element: <Write />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
