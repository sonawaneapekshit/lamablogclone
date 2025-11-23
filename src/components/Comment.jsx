import React from 'react';
import IKImage from './IKImage';

const Comment = () => {
  return (
    <div className="mb-8 flex flex-col bg-slate-50 rounded-lg p-4">
      <div className="flex items-center gap-4">
        <IKImage
          className="rounded-full w-10 he-10 object-cover"
          src="/userImg.jpeg"
          width="40"
          height="40"
        />
        <span className="font-medium">John Doe</span>
        <span className="text-sm text-gray-500">2 Days ago</span>
      </div>
      <div className='mt-4'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias magnam enim velit deleniti libero nulla aut sunt autem incidunt iusto?</p>
      </div>
    </div>
  );
};

export default Comment;
