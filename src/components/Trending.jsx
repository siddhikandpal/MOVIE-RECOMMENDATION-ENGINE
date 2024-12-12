import React,{useState, useEffect} from 'react'
import {Link, useNavigate} from "react-router-dom"
import Topnav from './partials/Topnav';
import axios from '../utils/axios';
import Dropdown from './partials/Dropdown';
import Cards from './partials/Cards';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';

function Trending() {
    const navigate = useNavigate();
    const [category, setcategory] = useState("all");
    const [duration, setduration] = useState("day");
    const [trending, settrending] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true)
    document.title = "Morata | Trending"

    const GetTrending = async () => {
      try {
        const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);
          
          if (data.results.length > 0) {
              
              settrending((prevState) => [...prevState, ...data.results]);
              setpage(page+1);
          }
          else {
              sethasMore(false);
          }
          
      } catch (error) {
        console.log("ERROR : ", error);
      }
    };

    const refreshHandler = ()=> {
        if (trending.length === 0) {
            GetTrending();
        }
        else {
            setpage(1);
            settrending([]);
            
        }
    }

    useEffect(() => {
      refreshHandler();
    }, [category, duration]);
    


    return trending.length > 0 ? (
      <div className=" w-screen h-screen ">
        <div className="w-full flex items-center justify-between px-[5%]">
          <h1 className="text-2xl text-zinc-400 font-semibold flex gap-2 ">
            <i
              onClick={() => navigate(-1)}
              className="hover:text-[#6556CD] ri-arrow-left-line"
            ></i>
            Trending
          </h1>
          <div className="flex items-center ">
            <Topnav />
            <Dropdown
              title="Category"
              options={["movie", "tv", "all"]}
              func={(e) => setcategory(e.target.value)}
            />
            <div className="w-[2%]"></div>
            <Dropdown
              title="Duration"
              options={["Week", "day"]}
              func={(e) => setcategory(e.target.value)}
            />
          </div>
        </div>

        <InfiniteScroll
          dataLength={trending.length}
          next={GetTrending}
          hasMore={hasMore}
          loader={<h1>Loading...</h1>}
        >
          <Cards data={trending} title={category} />
        </InfiniteScroll>
      </div>
    ) : (
      <Loading />
    );
}

export default Trending