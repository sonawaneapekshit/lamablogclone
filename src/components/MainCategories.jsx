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
      <div className="bg-gray-50 rounded-full flex items-center p-2 gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="gray"
            d="m746 641l254 255l-105 105l-254-254q-106 72-232 72q-169 0-289-120T0 410t120-289T409 1t289 120t120 289q0 127-72 231zm-65-231q0-113-79.5-193T409 137t-193 80t-80 193t80 192.5T409 682t192.5-79.5T681 410z"
          />
        </svg>
        <input type="text" name="" id="" />
      </div>
    </div>
  );
};

export default MainCategories;
