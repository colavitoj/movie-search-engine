import React from "react"

function MovieCard(props) {

    const m = props.m;


    return (


        <div className="card" key={m.id}>
            <img className="card--image"
                src={`https://image.tmdb.org/t/p/original/${m.poster_path}`}
                alt={m.title + 'Poster'}
            />
            <div className="card--content">
                <h3 className="card--title">{m.title}</h3>
                <p><small>RELEASE DATE: {m.release_date}</small></p>
                <p><small>RATING: {m.vote_average}</small></p>
                <p className="card--desc">{m.overview}</p>

            </div>
        </div>

    )
}


export default MovieCard