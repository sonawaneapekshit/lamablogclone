import React from 'react';
import { Link } from 'react-router';

const IntroductionSection = () => {
  return (
    <div className="flex justify-between items-center">
      {/* Titles */}
      <div className="w-9/12">
        <h1 className="text-2xl md:text-4xl lg:text-6xl text-gray-800 font-bold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </h1>
        <p className="mt-8 text-md md:text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          expedita tempora culpa! Nobis ratione facere praesentium id vitae
          dignissimos obcaecati?
        </p>
      </div>
      {/* animated button */}
      <Link to="/write" className='relative hidden md:block focus:outline-2 focus:outline-offset-2 focus:outline-dashed focus:outline-slate-600'>
        <svg
          viewBox="0 0 200 200"
          width="200"
          height="200"
          className="text-lg tracking-widest"
          tabIndex="-1"
        >
          <defs>
            <path
              id="circlePath"
              d="M100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
          </defs>

          <text>
            <textPath href="#circlePath" startOffset="0%">
              Write your story .
            </textPath>
          </text>

          <text>
            <textPath href="#circlePath" startOffset="50%">
              Share your Idea .
            </textPath>
          </text>
        </svg>
        <button className="bg-blue-800 rounded-full flex items-center justify-center absolute top-2/4 left-2/4 -translate-x-1/2  -translate-y-1/2" tabIndex="-1">
          <svg
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 15.6569V10M14 10H8.34315M14 10L5.63604 18.364M10.2432 20.8278C13.0904 21.3917 16.1575 20.5704 18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C3.42957 7.84251 2.60828 10.9096 3.17216 13.7568"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </Link>
    </div>
  );
};

export default IntroductionSection;
