import React, { useState } from 'react';
import PostsList from '../components/PostsList';
import Sidemenu from '../components/Sidemenu';

const PostsListPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h3 className="mb-8 text-2xl text-gray-600">Development blog</h3>
      <button
        className="md:hidden bg-blue-800 text-sm text-white px-4 py-2 rounded-2xl mb-4 min-w-36"
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        {open ? 'Close' : 'Filter or Search'}
      </button>
      <div className="flex gap-8 flex-col-reverse md:flex-row">
        <div>
          <PostsList />
        </div>
        <aside className={`${open ? 'block': 'hidden'} md:block `}>
          <Sidemenu />
        </aside>
      </div>
    </div>
  );
};

export default PostsListPage;
