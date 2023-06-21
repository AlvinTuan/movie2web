import useSWR from "swr";
import { SetStateAction, useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import { apiKey, fetcher } from "../../config";
import { NavLink, useNavigate } from "react-router-dom";
import { Movie } from "../../interface";
import LoadingSkeleton from "../loading/LoadingSkeleton";

const SearchBar: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("");
  const filterDebounce = useDebounce(filter, 500);
  const [url, setUrl] = useState("");
  const handleOnChange = (e: { target: { value: SetStateAction<string> } }) => {
    setFilter(e.target.value);
  };
  const { data, error } = useSWR(url, fetcher);
  useEffect(() => {
    if (filterDebounce) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${filterDebounce}`
      );
    } else {
      setUrl("");
    }
  }, [filterDebounce]);
  const results = data?.results || [];
  const isLoading = !data && !error;

  return (
    <div className="flex flex-col items-center min-w-[200px]">
      <div className="border-none flex items-center gap-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-secondary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <input
          type="text"
          value={filter}
          placeholder="Search movie"
          className="bg-inherit w-[200px] h-10 focus:outline-none bg-slate-50 rounded-lg p-1 text-black"
          onChange={handleOnChange}
        />
      </div>
      {results.length > 0 && (
        <div className="w-[450px] absolute top-14 translate-x-[29%] bg-white flex flex-col rounded-lg max-h-[300px] overflow-y-auto">
          {isLoading &&
            new Array(5)
              .fill(0)
              .map((item) => <SearchBarSkeleton></SearchBarSkeleton>)}
          {!isLoading &&
            results.slice(0, 5).map((item: Movie) => (
              <div
                className="text-black cursor-pointer hover:bg-slate-200"
                onClick={() => {
                  navigate(`/originales/originale/${item.id}`);
                  setFilter("");
                }}
              >
                <div className="flex gap-x-2 p-2 border">
                  <img
                    src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`}
                    alt=""
                    className="w-[80px] h-[80px] object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <div className="flex items-center gap-x-1">
                      <span>
                        Rating: {parseFloat(item.vote_average.toFixed(1))}
                      </span>
                      <img src="/star.png" alt="" />
                    </div>
                    <div>
                      <span>
                        Year of manufacture:{" "}
                        {new Date(item.release_date).getFullYear()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          <div className="text-black underline mx-auto hover:text-buttonColor p-2">
            <NavLink
              to={`/movies/${filterDebounce}`}
              onClick={() => setFilter("")}
            >
              More Movies
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

const SearchBarSkeleton: React.FC = () => {
  return (
    <div className="text-black cursor-pointer hover:bg-slate-200">
      <div className="flex gap-x-2 p-2 border">
        <LoadingSkeleton
          width="80px"
          height="80px"
          radius="8px"
        ></LoadingSkeleton>
        <div className="w-[330px]">
          <h3 className="font-medium">
            <LoadingSkeleton width="100%" height="25px"></LoadingSkeleton>
          </h3>
          <div className="flex items-center gap-x-1 my-1">
            <span>
              <LoadingSkeleton width="100px" height="20px"></LoadingSkeleton>
            </span>
          </div>
          <div>
            <span>
              <LoadingSkeleton width="200px" height="20px"></LoadingSkeleton>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
