import MovieCard, { MovieCardSkeleton } from "./MovieCard";
import { SwiperSlide, Swiper } from "swiper/react";
import { Movie } from "../../interface";
import { apiKey, fetcher } from "../../config";
import useSWR from "swr";

interface MovieListProps {
  type?: string;
}

interface MovieType {
  results: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ type = "now_playing" }) => {
  const { data, error } = useSWR<MovieType>(
    `https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}`,
    fetcher
  );
  const isLoading = !data && !error;
  const results = data?.results || [];
  return (
    <div className="movie-list">
      {isLoading && (
        <Swiper spaceBetween={40} slidesPerView={"auto"}>
          <SwiperSlide>
            <MovieCardSkeleton></MovieCardSkeleton>
          </SwiperSlide>
          <SwiperSlide>
            <MovieCardSkeleton></MovieCardSkeleton>
          </SwiperSlide>
          <SwiperSlide>
            <MovieCardSkeleton></MovieCardSkeleton>
          </SwiperSlide>
          <SwiperSlide>
            <MovieCardSkeleton></MovieCardSkeleton>
          </SwiperSlide>
        </Swiper>
      )}
      {!isLoading && (
        <Swiper spaceBetween={40} slidesPerView={"auto"}>
          {results.length > 0 &&
            results.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieCard item={item}></MovieCard>
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </div>
  );
};

export default MovieList;
