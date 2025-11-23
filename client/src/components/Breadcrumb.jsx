import React from 'react';
import { Link } from 'react-router';

const Breadcrumb = () => {
  return (
    <div className="gap-4 flex items-center">
      <Link
        to="/"
        className="hover:underline focus:outline-2 focus:outline-offset-2 focus:outline-dashed focus:outline-slate-600"
      >
        Home
      </Link>
      <span className="text-md leading-none">&gt;</span>
      <span className="text-blue-800">Article & Blogs</span>
    </div>
  );
};

export default Breadcrumb;
