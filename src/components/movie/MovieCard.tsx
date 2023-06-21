import { useNavigate } from "react-router-dom";
import { Movie } from "../../interface";
import LoadingSkeleton from "../loading/LoadingSkeleton";

interface MovieCardProps {
  item: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ item }) => {
  const navinate = useNavigate();
  const { id, title, release_date, vote_average, poster_path } = item;
  return (
    <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800 select-none h-full">
      <img
        src={`http://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <div className="flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <div className="flex items-center justify-between opacity-40 mb-5">
          <span>{new Date(release_date).getFullYear()}</span>
          <div>
            <span>Rating: {parseFloat(vote_average.toFixed(1))}</span>
          </div>
        </div>
        <button
          onClick={() => navinate(`/originales/originale/${id}`)}
          className="py-3 px-6 rounded-lg capitalize bg-buttonColor w-full font-bold mt-auto"
        >
          Now Watching
        </button>
      </div>
    </div>
  );
};

export const MovieCardSkeleton = () => {
  return (
    <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800 select-none h-full">
      <LoadingSkeleton
        width="100%"
        height="250px"
        radius="8px"
        className="mb-5 object-cover"
      ></LoadingSkeleton>
      <div className="flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-3">
          <LoadingSkeleton width="100%" height="20px"></LoadingSkeleton>
        </h3>

        <div className="flex items-center justify-between opacity-40 mb-5">
          <span>
            <LoadingSkeleton width="50px" height="10px"></LoadingSkeleton>
          </span>
          <div>
            <span>
              <LoadingSkeleton width="80px" height="10px"></LoadingSkeleton>
            </span>
          </div>
        </div>
        <LoadingSkeleton
          width="100%"
          height="45px"
          radius="8px"
        ></LoadingSkeleton>
      </div>
    </div>
  );
};

export default MovieCard;
