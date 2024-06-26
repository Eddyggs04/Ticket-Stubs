import React from "react";
import './MovieCard.css'


// displays the movies' poster, title, date released, and description using the API
const MovieCard = (props) => {

    const API_IMAGE="https://image.tmdb.org/t/p/w500/"

    return (
        <div className="card">
            <div className="poster">
                <img src={API_IMAGE + props.poster_path} />
            </div>

            <div className="info">
                <p className="title">{props.title}</p>
                <p className="vote">{props.vote_average}</p>
            </div>
            <div className="overview">
                <h2 className="title_overview">Overview</h2>
                <h3 className="overview_info">{props.overview}</h3>
            </div>
        </div>
    )
}

export default MovieCard;