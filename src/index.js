import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import MovieSearch from './components/movie-search.js'

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Movie Search Application</h1>
        <MovieSearch />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));