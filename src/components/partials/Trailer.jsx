import React from 'react'
import ReactPlayer from "react-player"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"

function Trailer() {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const category = pathname.includes("movie") ? "movie" : "tv";
    const ytvideo = useSelector((state) => state[category].info.videos);
    console.log(ytvideo);
  return (
    <div className="absolute w-screen  h-screen flex items-center justify-center left-0 top-0 z-[100] bg-[#0f0e0ed3]">
      <Link
        onClick={() => navigate(-1)}
        className="absolute hover:text-[#6556CD] ri-close-fill text-white right-[5%] top-[5%] text-3xl"
      ></Link> 
      <ReactPlayer
        height={500}
        width={900}
        url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
      />
    </div>
  );
}

export default Trailer