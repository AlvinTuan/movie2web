import "swiper/scss";
import MovieList from "./MovieList";

const OriginalesContent = () => {
  return (
    <>
      <section className="page-container-fluid pb-10 px-10 mt-44">
        <h2 className="capitalize mb-5 text-3xl font-bold">Now Playing</h2>
        <MovieList></MovieList>
      </section>
      <section className="page-container-fluid pb-10 mt-16 px-10">
        <h2 className="capitalize mb-5 text-3xl font-bold">Top Rated</h2>
        <MovieList type="top_rated"></MovieList>
      </section>
      <section className="page-container-fluid pb-10 mt-16 px-10">
        <h2 className="capitalize mb-5 text-3xl font-bold">Popular</h2>
        <MovieList type="popular"></MovieList>
      </section>
    </>
  );
};

export default OriginalesContent;
