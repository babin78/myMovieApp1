import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./HeroSection.scss";

import Img from "../../../components/lazyLoadImage/Img";
import { fetchApiData } from "../../../utils/services";

const HeroSection = () => {
  const [background, setBackground] = useState("");
  const { url } = useSelector((state) => state.home.url);
  //console.log("image url(store):" + url);
  const [loading, setLoading] = useState(true);

  //const { data, loading } = useFetch("/movie/upcoming?language=en-US&page=1");
  /*
  useEffect(() => {
    //console.log(url);
    const bg =
      url?.baseURL +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, []);
*/

  useEffect(() => {
    //setTimeout(() => {
    const data = fetchApiData("/movie/upcoming?language=en-US&page=1")
      .then((res) => {
        //console.log(res);
        //console.log(
        //  res?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
        //);

        setLoading(false);
        const bg =
          //url.baseURL +
          "http://image.tmdb.org/t/p/original" +
          res?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        //console.log("bg:" + bg);
        setBackground(bg);
      })
      .catch((err) => {
        //console.log(err);
        setLoading(false);
      });
    /*
      setBackground(
        "https://image.tmdb.org/t/p/original/hZkgoQYus5vegHoetLkCJzb17zJ.jpg"
      );
       */
    setLoading(false);
    //console.log();

    //}, 2000);
  }, []);

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}
      <div className="opacity-layer"></div>
      <div className="container">
        <div className="title">Welcome</div>
        <div className="subTitle">
          Millions of movies, TV shows and people to discover. Explore now.
        </div>
        <div className="searchInput">
          <input type="text" placeholder="Search for a movie or tv show...." />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
