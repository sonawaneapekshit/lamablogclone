import { useUser } from '@clerk/clerk-react';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  const [value, setValue] = useState('');

  // Handle loading state
  if (!isLoaded) return <div>Loading...</div>;

  // Protect the page from unauthenticated users
  if (isLoaded && !isSignedIn) return <div>You should login</div>;


  return (
    <div className='h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6'>
      <h1 className='text-xl font-light'>Create a new post</h1>
      <form action="" className='flex flex-col gap-6 flex-1 mb-6'>
        <button className='p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white w-max'>Add a cover image</button>
        <input type="text" className="" placeholder="My Awesome Story" className="p-2 text-4xl font-semibold bg-transparent outline-none" />
        <div className='flex items-center gap-4'>
          <label htmlFor="catlist" className='text-sm'>Choose a Category</label>
          <select name="cat" id="catlist" className='p-2 rounded-xl bg-white shadow-md text-xl'>
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engine</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea name="desc" id="" placeholder="A Short Description" className='p-4 rounded-xl bg-white shadow-md text-xl' />
        <ReactQuill theme="snow" value={value} onChange={setValue} className='flex-1 rounded-xl bg-white shadow-md text-xl'/>
        <button className='bg-blue-800 text-white font-medium rounded-full p-4 lg:w-36'>Send</button>
      </form>
    </div>
  );
};

export default Write;
