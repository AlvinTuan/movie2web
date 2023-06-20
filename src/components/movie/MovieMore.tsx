import React, { SetStateAction, useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import { apiKey, fetcher } from "../../config";
import useSWR from "swr";
import { useParams } from "react-router-dom";
import { Movie } from "../../interface";
import MovieCard from "./MovieCard";

const MovieMore: React.FC = () => {
  const { filter } = useParams();
  console.log("🚀 ~ file: MovieMore.tsx:13 ~ param:", filter);
  const [url, setUrl] = useState("");
  const { data } = useSWR(url, fetcher);
  useEffect(() => {
    if (filter) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${filter}`
      );
    } else {
      setUrl("");
    }
  }, [filter]);
  const results = data?.results || [];
  console.log(results);
  return (
    <>
      <div className="relative top-[150px] ">
        <span className="ml-[96px] font-bold text-2xl inline-block mb-7">
          Showing results for: "{filter}"
        </span>
        <div className="grid grid-cols-4 gap-10 px-24">
          {results.length > 0 &&
            results.map((item: Movie) => (
              <MovieCard key={item.id} item={item}></MovieCard>
            ))}
        </div>
      </div>
    </>
  );
};

export default MovieMore;
