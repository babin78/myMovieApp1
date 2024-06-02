//import React from "react";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import { fetchApiData } from "./utils/services";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getApiConfiguration, getGenres } from "./store/homeSlice";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home/Home";
import Details from "./Pages/details/Details";
import SearchResult from "./Pages/searchResult/SearchResult";
import Explore from "./Pages/explore/Explore";
//import PageNotFound from "./pages/404/PageNotFound";

//const Home = lazy(() => import("./Pages/Home/"));
//import { ErrorBoundary } from "react-error-boundary";

import "./App.scss";
/*
let errorThrown = false;

let imageURLs = {
  baseURL: any,
};
*/

const App = () => {
  const dispatch = useDispatch();

  const fetchAPIConfig = () => {
    fetchApiData("/configuration")
      .then((res) => {
        //console.log(res);

        const imageURLs = {
          baseURL: res?.images?.base_url + "original",
          securebaseURL: res?.images?.secure_base_url + "original",
        };

        dispatch(getApiConfiguration(imageURLs));
      })
      .catch((err) => {
        //console.log(err);
      });
  };

  const fetchGenres = async () => {
    let tags = ["movie", "tv"];
    let promises = [];
    let allGenres = {};

    tags.forEach((item) => {
      promises.push(fetchApiData(`/genre/${item}/list`));
    });

    const data = await Promise.all(promises);

    data.map(({ genres }) => {
      genres.map((item) => (allGenres[item.id] = item));
    });

    //console.log(allGenres);
    dispatch(getGenres(allGenres));
  };

  useEffect(() => {
    fetchAPIConfig();
    fetchGenres();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="/search/:query" element={<SearchResult />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
