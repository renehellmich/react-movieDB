import MovieContainer from "../movieContainer/MovieContainer";

const MovieSection = ({data}) => {
    return (
        <>{
            data.map((movie, index) => {
                return (
                    <div key={index} className='movieContainer'>
                        <MovieContainer
                            title={movie.title}
                            director={movie.director}
                            year={movie.year}
                            duration={movie.duration}
                            genre={movie.genre}
                            rate={movie.rate}
                        />
                    </div>
                )
            })
        } </>
    );
}

export default MovieSection;