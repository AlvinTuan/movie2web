import { useEffect, useState } from "react";
import axios from "axios";
import BannerItem from "./BannerItem";
import { MovieBanner } from "../../interface.js";

const Banner = () => {
  const [movies, setMovies] = useState<MovieBanner[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      const res = await axios.get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=0f2828258a4259490e4802ec8bceef93"
      );
      setMovies(res.data.results);
    };
    getMovies();
  }, []);
  return (
    <>
      <div className="relative inset-x-2/4 -translate-x-2/4 top-[100px] w-[1440px]">
        <BannerItem movies={movies}></BannerItem>
      </div>
    </>
  );
};

export default Banner;
