import axios from "axios";
import MovieCard from "./MovieCard";
import { SwiperSlide, Swiper } from "swiper/react";
import { useEffect, useState } from "react";
import { Movie } from "../../interface";
import { fetcher } from "../../config";
import useSWR from "swr";

interface MovieListProps {
  type?: string;
}

interface MovieType {
  results: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ type = "now_playing" }) => {
  const { data, error } = useSWR<MovieType>(
    `https://api.themoviedb.org/3/movie/${type}?api_key=0f2828258a4259490e4802ec8bceef93`,
    fetcher
  );
  if (!data) return null;
  console.log("🚀 ~ file: MovieList.tsx:36 ~ data:", data);

  const { results } = data;
  if (!results || results.length <= 0) return null;
  console.log(results);

  return (
    <div className="movie-list">
      <Swiper spaceBetween={40} slidesPerView={"auto"}>
        {results.length > 0 &&
          results.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item}></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
