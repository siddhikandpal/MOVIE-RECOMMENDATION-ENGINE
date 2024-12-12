import React from 'react'
import {Link} from "react-router-dom"

function Header({ data }) {
    console.log(data);
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.7),rgba(0,0,0,.9)),url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-full h-[50vh] flex flex-col justify-end p-[5%] gap-1"
    >
      <h1 className="text-5xl font-black text-white w-[70%]">
        {data.name || data.original_name || data.original_title}
      </h1>
      <p className="w-[70%] text-zinc-200">
        {data.overview.slice(0, 200)}...
        <Link
          to={`/${data.media_type}/details/${data.id}`}
          className="text-blue-500"
        >
          more
        </Link>
      </p>
      <p className="text-zinc-300 flex gap-2 items-center justify-start">
        <i className="ri-ai-generate"></i>Rating: {data.vote_average} / 10
        <i className="ri-play-circle-fill text-yellow-500"></i>
        {data.media_type.toUpperCase()} <i className="ri-megaphone-fill"></i>{" "}
        Release Date:
        {data.release_date || data.first_air_date}{" "}
      </p>
      <Link
        to={`/${data.media_type}/details/${data.id}`}
        className="bg-[#6656cd] mt-5 rounded text-white font-semibold hover:bg-[#6656cdd8] p-4 w-fit"
      >
        {""}
        Watch Trailer
      </Link>
    </div>
  );
}

export default Header