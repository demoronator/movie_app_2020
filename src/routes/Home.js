import React from "react";
import Axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

const Home = () => {
  const KEY_STORAGE = "movies";
  const EXPIRATION_SEC = 600;
  const [isLoading, setIsLoading] = React.useState(true);
  const [movies, setMovies] = React.useState([]);

  const checkValidate = (obj) => {
    try {
      const {
        data: {
          "@meta": { server_time }
        }
      } = obj;
      console.log(server_time);
      const expiration = server_time + EXPIRATION_SEC;
      const now = Math.floor(Date.now() / 1000);
      return now < expiration;
    } catch (error) {
      return false;
    }
  };

  React.useEffect(() => {
    async function getMovies() {
      let loadedMovies = localStorage.getItem(KEY_STORAGE);
      let parsedMovies = JSON.parse(loadedMovies);
      if (!parsedMovies || !checkValidate(parsedMovies)) {
        parsedMovies = await Axios.get(
          "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
        );
        let toSave = JSON.stringify(parsedMovies);
        localStorage.setItem(KEY_STORAGE, toSave);
      }

      const {
        data: {
          data: { movies }
        }
      } = parsedMovies;

      setMovies(movies);
      setIsLoading(false);
    }
    getMovies();
  }, []);

  return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      ) : (
        <div className="movies">
          {movies.map((m) => (
            <Movie
              key={m.id}
              year={m.year}
              title={m.title}
              summary={m.summary}
              poster={m.medium_cover_image}
              genres={m.genres}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Home;
