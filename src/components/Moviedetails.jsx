import React,{useEffect} from 'react'
import { useDispatch,useSelector } from "react-redux"
import { asyncloadmovie, removemovie } from '../store/actions/movieActions'
import { useParams, Outlet   } from 'react-router-dom'
import { useNavigate, Link, useLocation } from "react-router-dom";
import Loading from './Loading'
import HorizontalCards from '../components/partials/HorizontalCards'

function Moviedetails() {

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { id } = useParams();
  const {info} = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  console.log(info);
  useEffect(() => {
    dispatch(asyncloadmovie(id));

    return () => {
      dispatch(removemovie());
    }
  }, [id]);
  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.7),rgba(0,0,0,.9)),url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="relative w-screen h-[150vh] px-[10%]"
    >
      <nav className="h-[10vh] w-full text-zinc-100 flex items-center gap-10 text-xl">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-line"
        ></Link>
        <a target="_blank" href={info.detail.homepage}>
          <i className="ri-earth-fill"></i>
         </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="ri-link"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
        >
          imdb
        </a>
      </nav>

      <div className="w-full flex ">
        <img
          className="w-[40vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]"
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.backdrop_path
          }`}
          alt=""
        />

        <div className="content ml-[5%] text-white font-black">
          <h1 className="text-5xl">
            {info.detail.name ||
              info.detailoriginal_name ||
              info.detail.original_title}
          </h1>
          <small>{info.detail.release_date}</small>
          <h1>{info.detail.genres.map((g) => g.name).join(" , ")}</h1>
          <h1>{info.detail.runtime}min</h1>
          <h1 className="font-semibold">OverView</h1>
          <h1 className="font-normal mt-4 mb-10">{info.detail.overview}</h1>

          <Link
            className="rounded-md mt-[5%] py-5 px-10 bg-[#6556CD] w-fit h flex gap-2 hover:bg-[#6f61c8]"
            to={`${pathname}/trailer`}
          >
            <i className="ri-play-fill text-xl"></i>
            Play Trailer
          </Link>
        </div>
      </div>

      <div className="w-[80%]">
        <div className="mt-5 flex flex-col gap-5">
          {info.watchproviders && info.watchproviders.flatrate && (
            <div className="flex gap-x-10 items-center text-white">
              <h1>OTT Platform</h1>
              {info.watchproviders.flatrate.map((w) => (
                <img
                  title={w.provider_name}
                  className="w-[5vh] h-[5vh] rounded-md shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]"
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt=""
                />
              ))}
            </div>
          )}

          {info.watchproviders && info.watchproviders.rent && (
            <div className="flex gap-x-10 items-center text-white">
              <h1>Available on Rent</h1>
              {info.watchproviders.rent.map((w) => (
                <img
                  title={w.provider_name}
                  className="w-[5vh] h-[5vh] rounded-md shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]"
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt=""
                />
              ))}
            </div>
          )}
          {info.watchproviders && info.watchproviders.buy && (
            <div className="flex gap-x-10 items-center text-white">
              <h1>Buy on </h1>
              {info.watchproviders.buy.map((w) => (
                <img
                  title={w.provider_name}
                  className="w-[5vh] h-[5vh] rounded-md shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]"
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt=""
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <hr  className="mb-3"/>
      <HorizontalCards data = {info.recommendations.length > 0
          ? info.recommendations
        : clientInformation.similar} />
      <Outlet/>
        
    </div>
  ) : (
    <Loading />
  );
}

export default Moviedetails