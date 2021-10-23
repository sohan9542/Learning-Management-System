import React from "react";
import Blog from "./Blog";
import DiscoverTopCategories from "./DiscoverTopCategories";
import Hero from "./Hero";
import Review from "./Review";
import Trending from "./Trending";
const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Trending />
      <DiscoverTopCategories />
      <Review />
      <Blog />
    </div>
  );
};

export default Home;
