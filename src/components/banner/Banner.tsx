import useSWR from "swr";
import { fetcher } from "../../config.js";
import { useEffect, useState } from "react";
import axios from "axios";
import BannerItem from "./BannerItem";
import { Movie } from "../../interface.js";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

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
      <section className="mt-10 page-container">
        <BannerItem movies={movies}></BannerItem>
      </section>
    </>
  );
};

export default Banner;
