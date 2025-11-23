import React from 'react';

const Search = () => {
  return (
    <div className="bg-gray-50 rounded-full flex items-center p-2 gap-2">
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
  );
};

export default Search;
