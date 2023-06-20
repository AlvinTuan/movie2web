import useSWR from "swr";
import { SetStateAction, useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import { apiKey, fetcher } from "../../config";
import { NavLink, useNavigate } from "react-router-dom";
import { Movie } from "../../interface";

const SearchBar: React.FC = () => {
  const [filter, setFilter] = useState("");
  const filterDebounce = useDebounce(filter, 1000);
  const [url, setUrl] = useState("");
  const handleOnChange = (e: { target: { value: SetStateAction<string> } }) => {
    setFilter(e.target.value);
  };
  const { data } = useSWR(url, fetcher);
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
  console.log(results);
  const navigate = useNavigate();
  console.log(filterDebounce);

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
      {results && results.length > 0 && (
        <div className="w-[450px] absolute top-14 translate-x-[29%] bg-white flex flex-col rounded-lg max-h-[300px] overflow-y-auto">
          {results.slice(0, 5).map((item: Movie) => (
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
          <div className="text-black underline mx-auto hover:text-secondary p-2">
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

export default SearchBar;
