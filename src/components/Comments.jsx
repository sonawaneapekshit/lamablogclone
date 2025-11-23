import React from 'react'
import Comment from './Comment'

const Comments = () => {
  return (
    <div className='flex flex-col gap-8 lg:w-3/5'>
      <h3 className='text-xl text-gray-500 underline'>Comments</h3>
      <div className='flex items-center justify-between gap-8 w-full'>
        <textarea name="" id="" className='w-full text-xl rounded-xl' placeholder='Write a comment...'/>
        <button className='bg-blue-800 text-white rounded-xl'>Send</button>
      </div>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  )
}

export default Comments