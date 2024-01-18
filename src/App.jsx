import { useState } from 'react';
import './App.css'
import Button from './assets/components/button/button';
import movies from './assets/data/data'
import MovieSection from './assets/components/movieSection/MovieSection';

function App() {
  const [movie, setMovies] = useState(movies)
  console.log("Movie: ", movie);

  const sortDateAsc = () => {
    let dataCopy = [...movie]
    dataCopy.sort((a,b) => a.year - b.year)
    console.log(dataCopy);
    setMovies(dataCopy)
    
  }
  const sortDateDesc = () => {
    let dataCopy = [...movie]
    dataCopy.sort((a,b) => b.year-a.year)
    console.log(dataCopy);
    setMovies(dataCopy)
    
  }

  const sortRate = () => {
    let dataCopy = [...movie]
    dataCopy.sort((a,b) => {
      if(b.rate < a.rate) {
        return -1
      } else {
        return 1
      }
    })
    console.log(dataCopy);
    setMovies(dataCopy)
  }

  const sortAZ = () => {
    let dataCopy = [...movie]
    dataCopy.sort((a,b) => {
      if ( a.title < b.title) {
        return -1
      } else {
        return 1
      }
    })
    console.log(dataCopy);
    setMovies(dataCopy)
  }

  const sortZA = () => {
    let dataCopy = [...movie]
    dataCopy.sort((a,b) => {
      if (a.title > b.title) {
        return - 1
      } else {
        return 1
      }
    })
    console.log(dataCopy);
    setMovies(dataCopy)
  }

  return (
    <>
      <header>
        <nav>
          <Button
            name={"Sort by Date Ascending"}
            func={function () {
              sortDateAsc(movies)
            }}
          />
          <Button
            name={"Sort by Date Descending"}
            func={function () {
              sortDateDesc(movies)
            }}
          />
          <Button
            name={"Best Rate"}
            func={function () {
              sortRate(movies)
            }}
          />
          <Button
            name={"A-Z"}
            func={function () {
              sortAZ(movies)
            }}
          />
          <Button
            name={"Z-A"}
            func={function () {
              sortZA(movies)
            }}
          />

        </nav>
        <form action="#">
          <input
            type="text"
            name=""
            id=""
            placeholder='Filmtitle'
            onClick={''}
          />
        </form>
      </header>
      <main>
        {
          <MovieSection data={movie} />
        }
        {/* {sortDateAsc(movies)} */}
      </main>
    </>
  )
}

export default App
