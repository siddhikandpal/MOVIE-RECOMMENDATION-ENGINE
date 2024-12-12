import React from 'react'
import { Link, Routes, Route } from "react-router-dom";



function Sidenav() {
    return (
      <div className="w-[20%] h-full border-r-2 border-zinc-400 p-10">
        <h1 className="text-2xl text-white font-bold">
          <i className="text-[#6556CD] ri-vidicon-2-fill mr-2"></i>
          <span className=" ">Morata</span>
        </h1>

        <nav className="flex flex-col text-zinc-400 gap-2">
          <h1 className="text-white font-semibold text-xl mt-10 mb-5">
            New Feeds
          </h1>
          <Link to="/trending" className="hover:bg-[#6556CD] text-white rounded duration-300 p-[0.9rem]">
            <i className="ri-fire-fill mr-1"></i>
            Trending
          </Link>
          <Link to='/popular' className="hover:bg-[#6556CD] text-white rounded duration-300 p-[0.9rem]">
            <i className="ri-bard-fill  mr-1"></i>
            Popular
          </Link>
          <Link to='/movie' className="hover:bg-[#6556CD] text-white rounded duration-300 p-[0.9rem]">
            <i className="ri-movie-2-fill  mr-1"></i>
            Movies
          </Link>
          <Link to='/tv' className="hover:bg-[#6556CD] text-white rounded duration-300 p-[0.9rem]">
            <i className="ri-tv-2-fill  mr-1"></i>
            Tv Shows
          </Link>
          <Link to='/person' className="hover:bg-[#6556CD] text-white rounded duration-300 p-[0.9rem]">
            <i className="ri-team-fill  mr-1"></i>
            People
          </Link>
        </nav>
        <hr className="flec flex-col text-zinc-400 text-xl gap-3" />
        <nav className="flex flex-col text-zinc-400 gap-3">
          <h1 className="text-white font-semibold text-xl mt-10 mb-5">
            Website Information
          </h1>
          <Link to="/about" className="hover:bg-[#6556CD] text-white rounded duration-300 p-[0.9rem]">
            <i className="ri-information-fill mr-1"></i>
            About Morata
          </Link>
          <Link to="/contact" className="hover:bg-[#6556CD] text-white rounded duration-300 p-[0.9rem]">
            <i className="ri-phone-fill mr-1"></i>
            Contact Us
          </Link>
        </nav>
      </div>
    );
}

export default Sidenav