import React from 'react'
import {Link} from 'react-router-dom'

function Cards({ data, title }) {
  //console.log(title);
  console.log(data);
  return (
    <div className="flex flex-wrap w-full h-full px-[5%] bg-[#1F1E24]">
      {data.map((c, i) => (
        <Link to={`/${c.media_type || title}/details/${c.id}`}
          className="w-[25vh] relative mr-[5%] mb-[5%]" key={i}>
          <img
            className="w-[40vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]"
            src={`https://image.tmdb.org/t/p/original/${
              c.poster_path || c.backdrop_path || c.profile_path
            }`}
            alt=""
          />
          <h1 className="text-2xl text-zinc-300 mt-3 font-semibold">
            {c.name || c.title || c.original_name || c.original_title}
          </h1>
          <div className="text-white   bg-yellow-600 rounded-full w-[7vh] h-[7vh] flex justify-center items-center font-semibold text-xl absolute right-[-15%] bottom-[25%]">{(c.vote_average*10).toFixed()}<sup>%</sup></div>
        </Link>
      ))}
    </div>
  ); 
}

export default Cards