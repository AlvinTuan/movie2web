import { useNavigate } from "react-router-dom";
import { Movie } from "../../interface";

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

export default MovieCard;
