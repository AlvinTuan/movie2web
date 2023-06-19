import axios from "axios";
import MovieCard from "./MovieCard";
import { SwiperSlide, Swiper } from "swiper/react";
import { useEffect, useState } from "react";
import { Movie } from "../../interface";

interface MovieListProps {
  type?: string;
}

const MovieList: React.FC<MovieListProps> = ({ type = "now_playing" }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    const getMovieType = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${type}?api_key=0f2828258a4259490e4802ec8bceef93`
      );
      if (res && res.data.results) setMovies(res.data.results);
    };
    getMovieType();
  }, []);
  // console.log(movies);
  return (
    <div className="movie-list">
      <Swiper spaceBetween={40} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item}></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
