import React from 'react';
import { Link } from 'react-router';

const MainCategories = () => {
  return (
    <div className="hidden md:flex  flex-wrap bg-white items-center rounded-3xl lg:rounded-full p-4 shadow-lg gap-8">
      {/* Links */}
      <div className="flex-1 flex flex-wrap items-center justify-between gap-4">
        <Link
          to="/posts"
          className="bg-blue-800 text-white rounded-full px-4 py-2 focus:outline-2 focus:outline-offset-2 focus:outline-dashed focus:outline-slate-600"
        >
          All Posts
        </Link>
        <Link
          to="/posts?cat=web-design"
          className="hover:bg-blue-100 rounded-full px-4 py-2 focus:outline-2 focus:outline-offset-2 focus:outline-dashed focus:outline-slate-600"
        >
          Web Dev
        </Link>
        <Link
          to="//posts?cat=css"
          className="hover:bg-blue-100 rounded-full px-4 py-2 focus:outline-2 focus:outline-offset-2 focus:outline-dashed focus:outline-slate-600"
        >
          CSS
        </Link>
        <Link
          to="/posts?cat=tailwind"
          className="hover:bg-blue-100 rounded-full px-4 py-2 focus:outline-2 focus:outline-offset-2 focus:outline-dashed focus:outline-slate-600"
        >
          Tailwind
        </Link>
        <Link
          to="/posts?cat=mongo-db"
          className="hover:bg-blue-100 rounded-full px-4 py-2 focus:outline-2 focus:outline-offset-2 focus:outline-dashed focus:outline-slate-600"
        >
          Mongo DB
        </Link>
      </div>
      {/* divider */}
      <span className="text-xl font-medium leading-none">|</span>
      {/* Search */}
      <div
        className="bg-gray-50 rounded-full flex items-center p-2 gap-2"
        tabIndex="0"
      >
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {' '}
            <path
              d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="gray"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
        <input
          type="text"
          name="search"
          placeholder="Search a post..."
          className="bg-transparent focus:outline-none"
          tabIndex="-1"
        />
      </div>
    </div>
  );
};

export default MainCategories;
