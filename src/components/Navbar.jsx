import React, { useState } from 'react';
import IKImage from './IKImage';
import { Link } from 'react-router';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* Logo */}
      <div className=" text-2xl font-bold">
        <Link
          to="/"
          className="flex items-center gap-4 focus:outline-2 focus:outline-offset-2 focus:outline-dashed focus:outline-slate-600"
        >
          <IKImage
            src="/logo.png"
            alt="Blog Logo"
            lazyLoad={true}
            className="w-8 h-8"
            width={32}
            height={32}
          />
          <h1>ApekBlog</h1>
        </Link>
      </div>
      {/* Mobile Menu*/}
      <div className="md:hidden">
        <button
          className="text-4xl hover:to-blue-600 focus:outline-2 focus:outline-offset-2 focus:outline-dashed focus:outline-slate-800"
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
          <ul className="flex flex-col justify-center items-center gap-8 xl:gap-12">
            <li className="">
              <Link
                to="/"
                className="font-medium text-xl focus:outline-2 focus:outline-offset-2 focus:outline-dashed focus:outline-slate-600"
              >
                Home
              </Link>
            </li>
            <li className="">
              <Link
                className="font-medium text-xl focus:outline-2 focus:outline-offset-2 focus:outline-dashed focus:outline-slate-600"
                to="/"
              >
                Trending
              </Link>
            </li>
            <li className="">
              <Link
                className="font-medium text-xl focus:outline-2 focus:outline-offset-2 focus:outline-dashed focus:outline-slate-600"
                to="/"
              >
                Most Popular
              </Link>
            </li>
            <li className="">
              <Link
                className="font-medium text-xl focus:outline-2 focus:outline-offset-2 focus:outline-dashed focus:outline-slate-600"
                to="/"
              >
                About
              </Link>
            </li>
            <li className="">
              <button className="font-medium text-xl py-2 px-4 rounded-3xl bg-blue-800 text-white hover:to-blue-600 focus:outline-2 focus:outline-offset-2 focus:outline-dashed focus:outline-slate-800">
                Login 👋
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* Desktop Menu */}
      <div className="hidden md:flex">
        <ul className="flex items-center gap-8 xl:gap-12 font-medium text-lg">
          <li className="">
            <Link
              className="font-medium text-lg focus:outline-2 focus:outline-offset-2 focus:outline-dashed focus:outline-slate-600"
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="">
            <Link
              className="font-medium text-lg focus:outline-2 focus:outline-offset-2 focus:outline-dashed focus:outline-slate-600"
              to="/"
            >
              Trending
            </Link>
          </li>
          <li className="">
            <Link
              className="font-medium text-lg focus:outline-2 focus:outline-offset-2 focus:outline-dashed focus:outline-slate-600"
              to="/"
            >
              Most Popular
            </Link>
          </li>
          <li className="">
            <Link
              className="font-medium text-lg focus:outline-2 focus:outline-offset-2 focus:outline-dashed focus:outline-slate-600"
              to="/"
            >
              About
            </Link>
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
