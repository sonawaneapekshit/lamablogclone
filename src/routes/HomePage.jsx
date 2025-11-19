import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import IntroductionSection from '../components/IntroductionSection';
import MainCategories from '../components/MainCategories';
import FeaturedPosts from '../components/FeaturedPosts';

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
    </div>
  );
};

export default HomePage;
