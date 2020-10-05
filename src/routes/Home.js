import React from 'react';
import Axios from 'axios';
import Movie from "../components/Movie";
import "./Home.css";

const Home = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [movies, setMovies] = React.useState([]);
  const getMovies = async () => {
    const {
      data: {
        data: {
          movies
        }
      }
    } = await Axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    setMovies(movies);
    setIsLoading(false);
  }
  React.useEffect(() => getMovies(), []);

  return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      ) : (
        <div className="movies">
          {movies.map(m => (
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
}

export default Home;
