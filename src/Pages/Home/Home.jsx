import React, { Suspense, lazy } from "react";
import { useState, useEffect } from "react";
//import HeroSection from "./HeroSection";

import Spinner from "../../components/spinner/Spinner";
/*
const HeroSection = lazy(() => {
  /*setTimeout(() => {
    import("./HeroSection");
  }, 2000);
  */
//import("./HeroSection");
//});

const delayForDemo = (promise) => {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
};

//const HeroSection = lazy(() => delayForDemo(import("./HeroSection")));
const HeroSection = lazy(() => import("./HeroSection"));
const Trending = lazy(() => import("./trending/Trending"));
/*
const HeroSection = lazy(() => {
  /* setTimeout(() => {
    import("./HeroSection");
  }, 2000);

  import("./HeroSection");
});
*/

import "./Home.scss";

const Home = () => {
  const Loading = () => {
    return <h2>🌀 Loading...</h2>;
  };
  return (
    <div className="homePage">
      <Suspense fallback={<Spinner />}>
        <HeroSection />
        <Trending />
      </Suspense>
    </div>
  );
};

export default Home;
