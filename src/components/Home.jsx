import React,{useState , useEffect} from 'react'
import Sidenav from './partials/Sidenav';
import Topnav from './partials/Topnav';
import axios from '../utils/axios';
import Header from './partials/Header';
import HorizontalCards from './partials/HorizontalCards';
import Dropdown from './partials/Dropdown';
import Loading from './Loading';

function Home() {
    document.title = "Morata | Home";

    const [wallpaper, setwallpaper] = useState(null);
    const [trending, settrending] = useState(null);
    const [category, setcategory] = useState("all")

    const GetHeaderWallpaper = async () => {
      try {
          const { data } = await axios.get(`/trending/all/day`);
          let randomdata = data.results[(Math.random() * data.results.length).toFixed()];
          setwallpaper(randomdata);
      } catch (error) {
        console.log("ERROR : ", error);
      }
    };
    
    const GetTrending = async () => {
      try {
        const { data } = await axios.get(`/trending/${category}/day`);
        settrending(data.results);
      } catch (error) {
        console.log("ERROR : ", error);
      }
    };

    useEffect(() => {
        !wallpaper && GetHeaderWallpaper();
        GetTrending();
    },[category])
    //jabtak data ni ae tb tk dikhana bhi mt
    return wallpaper && trending ? (
      <>
        
          <Sidenav />
          <div className="h-screen w-[80%] overflow-auto overflow-x-hidden">
            <Topnav />
            <Header data={wallpaper} />
            <div className="mt-2 mr-2 flex justify-between">
              <h1 className="text-3xl text-zinc-400 font-semibold p-5">
                Trending
              </h1>
              <Dropdown
                title="Filter"
                options={["tv", "movie", "all"]}
                func={(e) => setcategory(e.target.value)}
              />
            </div>

            <HorizontalCards data={trending} func={setcategory} />
          </div>
    
      </>
    ) : (
      <Loading />
    );
}
 
export default Home