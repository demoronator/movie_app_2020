import React from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import Movie from './Movie';

class App extends React.Component{
  state = {
    isLoading: true,
    movies: [],
  }

  render() {
    const { isLoading, movies } = this.state;
    return <div>
      { isLoading
      ? "Loading..."
      : movies.map(m => (
        <Movie
          key={m.id}
          id={m.id}
          year={m.year}
          title={m.title}
          summary={m.summary}
          poster={m.medium_cover_image}
        />
      ))} </div>
  }
  
  componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    const {
      data: {
        data: {
          movies
        }
      }
    } = await Axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });
  }
}

export default App;
