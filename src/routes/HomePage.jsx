import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import IntroductionSection from '../components/IntroductionSection';
import MainCategories from '../components/MainCategories';
import FeaturedPosts from '../components/FeaturedPosts';
import PostsList from '../components/PostsList';

const HomePage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/*BREADCRUMB*/}
      <Breadcrumb />

      {/*Introduction*/}
      <IntroductionSection />

      {/* Main categories */}
      <MainCategories />

      {/*Featured Posts*/}
      <FeaturedPosts />

      {/* Posts List */}
      <div>
        <h3 className='my-8 text-2xl text-gray-600'>Recent posts</h3>
        <PostsList />
      </div>
    </div>
  );
};

export default HomePage;
