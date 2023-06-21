import React, { useEffect, useState } from "react";
import { apiKey, fetcher } from "../config";
import useSWR from "swr";
import { useParams } from "react-router-dom";
import { Movie } from "../interface";
import MovieCard from "../components/movie/MovieCard";
import ReactPaginate from "react-paginate";

const itemsPerPage = 20;

const MovieMore: React.FC = () => {
  const { filter } = useParams();
  const [url, setUrl] = useState("");
  const { data, error } = useSWR(url, fetcher);
  const [nextPage, setNextPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const loading = !data && !error;
  useEffect(() => {
    if (filter) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${filter}&page=${nextPage}`
      );
    } else {
      setUrl("");
    }
  }, [filter, nextPage]);
  const results = data?.results || [];
  useEffect(() => {
    if (!data || !data.total_results) return;
    setPageCount(Math.ceil(data.total_results / itemsPerPage));
  }, [data, itemOffset]);
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % data.total_results;
    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
  };
  return (
    <>
      <div className="relative top-[150px] px-14 py-10">
        <span className="ml-[96px] font-bold text-2xl inline-block mb-7">
          Showing results for: "{filter}"
        </span>
        {loading && (
          <div className="w-10 h-10 rounded-full border-4 border-buttonColor border-t-transparent border-t-4 mx-auto animate-spin"></div>
        )}
        <div className="grid grid-cols-4 gap-10 px-24">
          {!loading &&
            results.length > 0 &&
            results.map((item: Movie) => (
              <MovieCard key={item.id} item={item}></MovieCard>
            ))}
        </div>
        <div className="mt-10">
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            className="pagination"
          />
        </div>
      </div>
    </>
  );
};

export default MovieMore;
