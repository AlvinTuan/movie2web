import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../config";
import { MovieDetails } from "../interface";
import MovieSimilar from "../components/movie/MovieSimilar";
import Footer from "../layout/Footer";

// `https://api.themoviedb.org/3/movie/${movieID}?api_key=0f2828258a4259490e4802ec8bceef93`
const MovieDetailsPage: React.FC = () => {
  const { movieID } = useParams();
  const { data, error } = useSWR<MovieDetails>(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  const { backdrop_path, title, overview, genres } = data;
  console.log(data);

  return (
    <>
      <div className="w-full h-[980px] absolute top-0">
        <div className="absolute inset-0 bg-[#594444] bg-opacity-50"></div>
        <div
          className="w-full h-full object-cover bg-no-repeat"
          style={{
            backgroundImage: `url(http://image.tmdb.org/t/p/original/${backdrop_path})`,
          }}
        ></div>
        <div className="absolute w-[730px] bottom-[200px] left-[45px]">
          <h2 className="font-bold text-2xl mb-5">{title}</h2>
          <p className="text-[16px] mb-5">
            <span>{overview}</span>
          </p>
          {genres.length > 0 && (
            <div className="flex items-center justify-start gap-x-5">
              {genres.map((item) => (
                <span
                  className="border rounded-lg p-2 font-medium"
                  key={item.id}
                >
                  {item.name}
                </span>
              ))}
            </div>
          )}
        </div>
        <MovieSimilar></MovieSimilar>
      </div>
    </>
  );
};

export default MovieDetailsPage;
