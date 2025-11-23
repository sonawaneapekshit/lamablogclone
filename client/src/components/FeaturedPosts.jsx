import React from 'react';
import IKImage from './IKImage';
import { Link } from 'react-router';

const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col md:flex-row gap-8">
      {/* first post*/}
      <div className="w-full self-stretch md:w-1/2 flex flex-col gap-4">
        {/* image */}
        <IKImage
          src="featured1.jpeg"
          className="w-full h-full lg:min-h-60 rounded-3xl object-cover"
          width="735"
          height="489"
        />
        {/* details */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link to="/" className="text-blue-800 lg:text-lg">
            Web design
          </Link>
          <span className="text-gray-500">2 days ago</span>
        </div>
        {/* title */}
        <Link to="" className="text-lg lg:text-3xl font-semibold lg:font-bold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Link>
      </div>

      {/* Other posts */}
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        {/* second post*/}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            {/* image */}
            <IKImage
              src="featured2.jpeg"
              className="rounded-3xl object-cover w-full h-full"
              width="298"
              height="224"
            />
          </div>
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link to="/" className="text-blue-800">
                Web design
              </Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* title */}
            <Link
              to=""
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </Link>
          </div>
        </div>
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            {/* image */}
            <IKImage
              src="featured3.jpeg"
              className="rounded-3xl object-cover w-full h-full"
              width="298"
              height="224"
            />
          </div>
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">03.</h1>
              <Link to="/" className="text-blue-800">
                Web design
              </Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
              {/* title */}
            </div>
            {/* title */}
            <Link
              to=""
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </Link>
          </div>
        </div>
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            {/* image */}
            <IKImage
              src="featured4.jpeg"
              className="rounded-3xl object-cover w-full h-full"
              width="298"
              height="224"
            />
          </div>
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">04.</h1>
              <Link to="/" className="text-blue-800">
                Web design
              </Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
              {/* title */}
            </div>
            {/* title */}
            <Link
              to=""
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
