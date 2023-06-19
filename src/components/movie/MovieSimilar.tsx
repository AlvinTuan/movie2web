import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../../config";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./MovieCard";
import { Movie } from "../../interface";

interface MovieResults {
  results: Movie[];
}

const MovieSimilar = () => {
  const { movieID } = useParams();
  const { data, error } = useSWR<MovieResults>(
    `
    https://api.themoviedb.org/3/movie/${movieID}/similar?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  console.log(data);
  const { results } = data;
  if (!results || results.length <= 0) return null;

  return (
    <div className="py-10 px-11">
      <h2 className="text-3xl font-medium mb-10">Similar movie</h2>
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
    </div>
  );
};

export default MovieSimilar;
