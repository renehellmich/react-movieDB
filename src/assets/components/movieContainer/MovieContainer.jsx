import GenreDiv from "../genreDiv/GenreDiv";
import './moviecontainer.css'

const MovieContainer = ({ title, director, year, duration, genre, rate }) => {
    return (
        <>
            <h4>{title}</h4>
            <p className="movieDescription">{year}</p>
            <p className="movieDescription">{director}</p>
            <p className="movieDescription">{duration}</p>
            <p className="movieDescription">{rate}</p>
            <ul>{genre.map((object, index) => {
                return (
                    <div key={index}>
                        <GenreDiv
                            object={object}
                        />
                    </div>
                )
            })}</ul>
        </>
    );
}

export default MovieContainer;