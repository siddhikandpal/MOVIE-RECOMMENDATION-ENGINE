import React from 'react'
import Dropdown from './Dropdown';
import {Link} from 'react-router-dom'

function HorizontalCards({data}) {
  return (
   
      

      <div className="w-[100%] flex overflow-y-hidden ml-2">
        {data.map((d, i) => (
          <Link to={`/${d.media_type}/details/${d.id}`}
            key={i}
            className="min-w-[15%] mr-5 bg-zinc-900 rounded-md overflow-hidden"
          >
            <img
              className="w-full h-[45%] object-cover"
              src={`https://image.tmdb.org/t/p/original/${
                d.backdrop_path || d.profile_path
              }`}
            ></img>
            <div className="h-[55%] mt-1 px-2">
              <h1 className="text-md font-bold text-white  ">
                {d.name || d.original_name || d.original_title}
              </h1>
              <p className="  text-zinc-200 text-sm ">
                {d.overview.slice(0, 80)}...
                <span className="text-zinc-400">more</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
 
  );
}

export default HorizontalCards