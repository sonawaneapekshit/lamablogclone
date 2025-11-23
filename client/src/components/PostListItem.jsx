import React from 'react';
import IKImage from './IKImage';
import { Link } from 'react-router';

const PostListItem = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* image */}
      <div className="md:hidden xl:block xl:1/3">
        <IKImage src="postImg.jpeg" className="w-full xl:min-h-60 rounded-2xl object-cover" width="895" height="595" />
      </div>
      {/* details */}
      <div className="flex flex-col gap-4 xl:2/3">
        <Link to="/test" className="text-4xl font-semibold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, at.
        </Link>
        <div className="flex items-center gap-2">
          <span>Written By</span>
          <Link className="text-blue-800">John Doe</Link>
          <span>On</span>
          <Link className="text-blue-800">Web Design</Link>
          <span>2 days ago</span>
        </div>
        <p className='text-md'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          vero iste quasi consectetur, porro voluptatem iure accusantium, odio
          doloribus vitae beatae corporis exercitationem tenetur et laudantium,
          vel repellendus eaque sit?
        </p>
        <Link to="/test" className="underline text-blue-800 text-sm">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
