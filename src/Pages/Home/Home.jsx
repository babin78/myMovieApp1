import React, { Suspense, lazy } from "react";
import { useState, useEffect } from "react";
import HeroSection from "./HeroSection";
import Trending from "./trending/Trending";
/*
const HeroSection = lazy(() => {
  /*setTimeout(() => {
    import("./HeroSection");
  }, 2000);
  */
//import("./HeroSection");
//});

import "./Home.scss";

const Home = () => {
  useEffect(() => {}, []);

  const loading = () => {
    return <h2>🌀 Loading...</h2>;
  };
  return (
    <div className="homePage">
      <Suspense fallback={<loading />}>
        <HeroSection />
      </Suspense>
      <Trending />
    </div>
  );
};

export default Home;
