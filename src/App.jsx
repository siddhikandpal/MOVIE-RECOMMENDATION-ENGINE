import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Loading from './components/Loading';
import Trending from './components/Trending';
import Popular from './components/Popular'
import Movie from './components/Movie';
import Tvshows from './components/Tvshows';
import People from './components/People';
import About from "./components/About";
import Contact from "./components/Contact";
import Moviedetails from "./components/Moviedetails";
import PersonDetails from "./components/PersonDetails";
import TvDetails from "./components/TvDetails";
import Trailer from './components/partials/Trailer';

function App() {
  return (
    <div className="bg-[#1F1E24] w-screen h-screen flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/details/:id" element={<Moviedetails />}>
          <Route path="/movie/details/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path="/tv" element={<Tvshows />} />
        <Route path="/tv/details/:id" element={<TvDetails />}>
          <Route path="/tv/details/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path="/person" element={<People />} />
        <Route path="/person/details/:id" element={<PersonDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}


export default App