import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import axios from "../utils/axios";
import Dropdown from "./partials/Dropdown";
import Cards from "./partials/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

function Tvshows() {
    const navigate = useNavigate();
    const [category, setcategory] = useState("airing_today");
    const [tv, settv] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
    document.title = "Morata | tvShows ";
    const GetTv = async () => {
        try {
            const { data } = await axios.get(`/tv/${category}?page=${page}`);
            
            if (data.results.length > 0) {
                settv((prevState) => [...prevState, ...data.results]);
                setpage(page + 1);
            } else {
                sethasMore(false);
            }
        } catch (error) {
            console.log("ERROR : ", error);
        }
    };


    const refreshHandler = () => {
      if (tv.length === 0) {
        GetTv();
      } else {
        setpage(1);
        settv([]);
        GetTv();
      }
    };

    useEffect(() => {
      refreshHandler();
    }, [category]);


    return tv.length > 0 ? (
      <div className=" w-screen h-screen ">
        <div className="w-full flex items-center justify-between px-[5%]">
          <h1 className="text-2xl text-zinc-400 font-semibold flex gap-2 ">
            <i
              onClick={() => navigate(-1)}
              className="hover:text-[#6556CD] ri-arrow-left-line"
            ></i>
            tv({category})
          </h1>
          <div className="flex items-center justify-start ">
            <Topnav />
            <Dropdown
              title="Category"
              options={["on_the_air", "top_rated", "popular", "airing_today"]}
              func={(e) => setcategory(e.target.value)}
            />
          </div>
        </div>

        <InfiniteScroll
          dataLength={tv.length}
          next={GetTv}
          hasMore={hasMore}
          loader={<h1>Loading...</h1>}
        >
          <Cards data={tv} title="tv"/>
        </InfiniteScroll>
      </div>
    ) : (
      <Loading />
    );
}

export default Tvshows;
