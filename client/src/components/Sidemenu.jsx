import React from 'react';
import Search from './Search';
import { Link } from 'react-router';

const Sidemenu = () => {
  return (
    <div className="px-4 h-max sticky top-8">
      <h3 className="mb-4 text-sm font-medium">Search</h3>
      <Search />
      <h3 className="mt-8 mb-4 text-sm font-medium">Filters</h3>
      <div>
        <label htmlFor="newest" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="newest"
            id="newest"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800 transition-all"
          />
          Newest
        </label>
        <label htmlFor="most-popular" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="most-popular"
            id="most-popular"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800 transition-all"
          />
          Most Popular
        </label>
        <label htmlFor="trending" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="trending"
            id="trending"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800 transition-all"
          />
          Trending
        </label>
        <label htmlFor="oldest" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="oldest"
            id="oldest"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800 transition-all"
          />
          Oldest
        </label>
      </div>
      <h3 className="mt-8 mb-4 text-sm font-medium">Categories</h3>
      <div className="flex flex-col gap-2 text-sm">
        <Link className="underline" to="/posts">
          All
        </Link>
        <Link className="underline" to="/posts?cat=web-design">
          Web Design
        </Link>
        <Link className="underline" to="/posts?cat=development">
          Development
        </Link>
        <Link className="underline" to="/posts?cat=designs">
          Databases
        </Link>
        <Link className="underline" to="/posts?cat=seon">
          Search Engine
        </Link>
        <Link className="underline" to="/posts?cat=marketing">
          Marketing
        </Link>
      </div>
    </div>
  );
};

export default Sidemenu;
