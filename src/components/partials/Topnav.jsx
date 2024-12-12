import React, { useEffect }  from 'react'
import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "../../utils/axios";

function Topnav() {

  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);
  //for Search Engine Search


  const GetSerches = async () => {
    try {
      const {data} = await axios.get(`/search/multi?query=${query}`);
      setsearches(data.results);
      
      
    } catch (error) {
      console.log("ERROR : ", error);
    }
  };


useEffect(() => {
  GetSerches();
}, [query]);


    
  return (
    <div className="w-[80%] mx-auto h-[10vh] relative flex justify-start items-center  left-[5%] top[100%]">
      <i className="text-zinc-400 text-3xl ri-search-line"></i>
      <input
        className="w-[50%] text-zinc-100 mx-10 p-5 text-xl outline-none border-none bg-transparent"
        onChange={(e) => setquery(e.target.value)}
        value={query}
        placeholder="search anything"
        type="text"
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className=" text-zinc-400 text-3xl ri-close-fill"
        ></i>
      )}

      <div className="z-[100] w-[80%] max-h-[50vh] absolute top-[90%] bg-zinc-100 overflow-auto rounded">
        {searches.map((s, i) => (
          <Link to={`/${s.media_type}/details/${s.id}`}
            key={i}
            className="inline-block w-[100%] p-10 flex justify-center items-center border-b-2 border-x-zinc-100 gap-5 text-zinc-600 font-semibold hover:text-black hover:bg-zinc-300"
          >
            <img
              className="w-[12vh] h-[10vh] object-cover rounded-sm "
              src={`https://image.tmdb.org/t/p/original/${s.backdrop_path}`}
              alt=""
            />
            <span>{s.name || s.original_name || s.original_title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Topnav