import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../../config";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./MovieCard";
import { Movie, MovieTrailer } from "../../interface";

// https://api.themoviedb.org/3/movie/{movie_id}/videos

interface MovieVideosType {
  results: MovieTrailer[];
}

const MovieVideos = () => {
  const { movieID } = useParams();
  const { data, error } = useSWR<MovieVideosType>(
    `
    https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  const { results } = data;
  if (!results || results.length <= 0) return null;
  console.log(results);
  return (
    <div className="py-10">
      <h2 className="text-2xl font-bold ml-11">Trailers</h2>
      <div className="flex flex-col gap-y-10 ml-[96px] mt-10">
        {results.slice(0, 3).map((item) => (
          <div key={item.id}>
            <h3 className="w-[864px] mb-5">
              <span className="bg-secondary text-xl font-medium p-3 rounded-lg cursor-pointer">
                {item.name}
              </span>
            </h3>
            <iframe
              width="864"
              height="486"
              src={`https://www.youtube.com/embed/${item.key}`}
              title={item.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="object-fill"
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieVideos;
