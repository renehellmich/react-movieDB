import GenreDiv from "../genreDiv/GenreDiv";
import './moviecontainer.css'

const MovieContainer = (props) => {
    return (
        <>
            <h4>{props.title}</h4>
            <p className="movieDescription year">{props.year}</p>
            <p className="movieDescription">{props.director}</p>
            <p className="movieDescription">{props.duration}</p>
            <p className="movieDescription">{props.rate}</p>
            <ul>{props.genre.map((object, index) => {
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