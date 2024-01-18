import { useState } from 'react';
import './App.css'
import Button from './assets/components/button/button';
import MovieContainer from './assets/components/movieContainer/MovieContainer'
import movies from './assets/data/data'

function App() {
  const [dateAscending, setDateAscending] = useState(false)
  console.log(movies);
  return (
    <>
      <header>
        <nav>
          {/* <button onClick={""}>
            Sort by Date Ascending
          </button> */}
          <Button 
            name={"Sort by Date Ascending"}
          />
          <Button 
            name={"Sort by Date Descending"}
          />
          <Button 
            name={"Best Rate"}
          />
          <Button 
            name={"A-Z"}
          />
          <Button 
            name={"Z-A"}
          />
          
        </nav>
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
