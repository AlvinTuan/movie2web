import React from "react";
import { Movie } from "../../interface";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
  movies: Movie[];
}

const BannerItem: React.FC<Props> = (props) => {
  const { movies } = props;
  return (
    <>
      <Swiper>
        {movies.length > 0 &&
          movies.map((item) => {
            return (
              <SwiperSlide>
                <div className="h-[600px] w-[1440px] relative">
                  <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
                  <img
                    src={`http://image.tmdb.org/t/p/original/${item.poster_path}`}
                    alt=""
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute left-20 bottom-5 w-full">
                    <h2 className="font-bold text-3xl mb-5">{item.title}</h2>
                    <div className="w-[700px]">
                      <p>{item.overview}</p>
                    </div>
                    <button className="mt-6 py-3 px-6 bg-primary text-[#000000] rounded-lg font-medium flex items-center gap-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                        />
                      </svg>
                      <span>Play Now</span>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
};

export default BannerItem;
