import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Loading from "./Loading";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import Cards from "./partials/Cards";
import InfiniteScroll from "react-infinite-scroll-component";



function Movie() {
    const navigate = useNavigate();
    const [category, setcategory] = useState("now_playing");
    const [movie, setmovie] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
    document.title = "Morata | movie";
    const GetMovie = async () => {
      try {
        const { data } = await axios.get(`/movie/${category}?page=${page}`);
        
        if (data.results.length > 0) {
          setmovie((prevState) => [...prevState, ...data.results]);
          setpage(page + 1);
        } else {
          sethasMore(false);
        }
      } catch (error) {
        console.log("ERROR : ", error);
      }
    };

    const refreshHandler = () => {
      if (movie.length === 0) {
        GetMovie();
      } else {
        setpage(1);
        setmovie([]);
        GetMovie();
      }
    };

    useEffect(() => {
      refreshHandler();
    }, [category]);
  return movie.length > 0 ? (
    <div className=" w-screen h-screen ">
      <div className="w-full flex items-center justify-between px-[5%]">
        <h1 className="text-2xl text-zinc-400 font-semibold flex gap-2 ">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>
          Movie({category})
        </h1>
        <div className="flex items-center ">
          <Topnav />
          <Dropdown
            title="Category"
            options={["popular","top_rated","upcoming","now_playing"]}
            func={(e) => setcategory(e.target.value)}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={movie.length}
        next={GetMovie}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={movie} title="movie" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default Movie;
