import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../../config";
import { MovieTrailer } from "../../interface";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// https://api.themoviedb.org/3/movie/{movie_id}/videos

interface MovieVideosType {
  results: MovieTrailer[];
}

const MovieVideos = () => {
  const { movieID } = useParams();
  const { data } = useSWR<MovieVideosType>(
    `
    https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${apiKey}`,
    fetcher
  );
  const results = data?.results || [];
  return (
    <div className="py-10">
      <h2 className="text-2xl font-bold ml-11">Trailers</h2>
      <div className="accordion-list flex flex-col gap-y-10 ml-[96px] mt-10">
        {results.slice(0, 3).map((item) => (
          <Accordion className="w-[900px]" key={item.id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{item.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <iframe
                  width="864"
                  height="486"
                  src={`https://www.youtube.com/embed/${item.key}`}
                  title={item.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="object-fill"
                ></iframe>
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default MovieVideos;
