import './App.css'
import MovieContainer from './assets/components/movieContainer/MovieContainer'
import movies from './assets/data/data'

function App() {

  console.log(movies);
  return (
    <>
      <header>

      </header>
      <main>
        {
          movies.map((movie, index) => {
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
        }
      </main>
    </>
  )
}

export default App
