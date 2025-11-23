import React from 'react';

const PostMenuActions = () => {
  return (
    <div className="flex flex-col mb-4">
      <h4 className='mt-8 mb-4 text-sm font-medium'>Actions</h4>
      <ul className="flex flex-col gap-4">
        <li className="flex items-center gap-2 py-2 text-md cursor-pointer">
          <svg
            viewBox="-5 0 20 20"
            version="1.1"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <title>bookmark [#1233]</title>
              <desc>Created with Sketch.</desc>
              <defs />
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-425.000000, -2639.000000)"
                  fill="#000000"
                >
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path
                      d="M371,2483 L377,2483 L377,2481 L371,2481 L371,2483 Z M377,2494.084 C374.904,2491.934 376.098,2493.158 374,2491.007 C371.902,2493.158 373.095,2491.935 371,2494.084 L371,2485 L377,2485 L377,2494.084 Z M369,2479 L369,2499 L374,2493.872 L379,2499 L379,2479 L369,2479 Z"
                      id="bookmark-[#1233]"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>

          <span>Save this Post</span>
        </li>
        <li className="flex items-center gap-2 py-2 text-md cursor-pointer">
          <svg
            viewBox="0 -0.5 21 21"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g strokeWidth="0" />
            <g strokeLinecap="round" strokeLinejoin="round" />
            <g fillRule="evenodd" transform="translate(-179 -360)">
              <path d="M186.35 376h2.1v-8h-2.1zm4.2 0h2.1v-8h-2.1zm-6.3 2h10.5v-12h-10.5zm2.1-14h6.3v-2h-6.3zm8.4 0v-4h-10.5v4H179v2h3.15v14h14.7v-14H200v-2z" />
            </g>
          </svg>
          <span>Delete this Post</span>
        </li>
      </ul>
    </div>
  );
};

export default PostMenuActions;
