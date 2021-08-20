import React, { useState } from "react";
import MovieCard from "./movie-card"
function MovieSearch(props) {

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const movieSearch = async (e) => {
        e.preventDefault();
        console.log("Submitting");

        const api_key = "43f505cb67537637f6bb7af06af4f840"
        const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${query}&page=1&include_adult=false`;

        try {

            const res = await fetch(apiUrl);
            const data = await res.json();
            console.log(data)
            setMovies(data.results);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <form className="form" onSubmit={movieSearch}>

                <label htmlFor="query" className="label">Movie Title</label>
                <input className="input"
                    type="text"
                    name="query"
                    placeholder="Enter a movie title"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)} />
                <button className="button" type="submit">Search</button>

            </form>
            <div className="card-list">
                {movies.filter(m => m.poster_path).map(m => (
                    <MovieCard m={m} key={m.id} />
                ))}

            </div>
        </div>
    )


}

export default MovieSearch