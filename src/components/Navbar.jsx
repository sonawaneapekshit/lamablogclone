import React, { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* Logo */}
      <div className=" text-2xl font-bold">
        <a
          href=""
          className="flex items-center gap-4 focus:outline-2 focus:outline-offset-2 focus:outline-dashed focus:outline-slate-600"
        >
          <img src="./logo.png" alt="Blog Logo" className="w-8 h-8" />
          <h1>ApekBlog</h1>
        </a>
      </div>
      {/* Mobile Menu*/}
      <div className="md:hidden">
        <button
          className="text-4xl"
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          {open ? 'x' : '☰'}
        </button>
        {/* Moblie Menu list */}
        <div
          className={`w-full h-screen flex flex-col justify-center absolute top-16 right-0 z-10 ${
            open ? 'translate-x-0' : 'translate-x-full'
          } transition-all ease-in-out`}
        >
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Trending</a>
            </li>
            <li>
              <a href="/">Most Popular</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <button>Login 👋</button>
            </li>
          </ul>
        </div>
      </div>
      {/* Desktop Menu */}
      <div className="hidden md:flex">
        <ul className="flex items-center gap-8 xl:gap-12 font-medium text-lg">
          <li className="">
            <a
              className="font-medium text-lg focus:outline-2 focus:outline-offset-2 focus:outline-dashed focus:outline-slate-600"
              href="/"
            >
              Home
            </a>
          </li>
          <li className="">
            <a
              className="font-medium text-lg focus:outline-2 focus:outline-offset-2 focus:outline-dashed focus:outline-slate-600"
              href="/"
            >
              Trending
            </a>
          </li>
          <li className="">
            <a
              className="font-medium text-lg focus:outline-2 focus:outline-offset-2 focus:outline-dashed focus:outline-slate-600"
              href="/"
            >
              Most Popular
            </a>
          </li>
          <li className="">
            <a
              className="font-medium text-lg focus:outline-2 focus:outline-offset-2 focus:outline-dashed focus:outline-slate-600"
              href="/"
            >
              About
            </a>
          </li>
          <li className="">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white hover:to-blue-600 focus:outline-2 focus:outline-offset-2 focus:outline-dashed focus:outline-slate-800">
              Login 👋
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
