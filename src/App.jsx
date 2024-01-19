import { useState } from 'react';
import './App.css'
import Button from './assets/components/button/button';
import movies from './assets/data/data'
import MovieSection from './assets/components/movieSection/MovieSection';

function App() {
  const [movie, setMovies] = useState(movies)
  const [search, setSearch] = useState('')
  console.log("Movie: ", movie);

  const sortDateAsc = () => {
    let dataCopy = [...movie]
    dataCopy.sort((a, b) => a.year - b.year)
    console.log(dataCopy);
    setMovies(dataCopy)

  }
  const sortDateDesc = () => {
    let dataCopy = [...movie]
    dataCopy.sort((a, b) => b.year - a.year)
    console.log(dataCopy);
    setMovies(dataCopy)

  }

  const filterGenre = (e) => {
    let sortMovie = movies.filter((movie) => {
      return (
        movie.genre.includes(e.target.value)
      )
    })
    setMovies(sortMovie)
  }

  const sortRate = () => {
    let dataCopy = [...movie]
    dataCopy.sort((a, b) => {
      if (b.rate < a.rate) {
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
    // dataCopy.sort((a,b) => a.title < b.title ? -1 : 1)
    dataCopy.sort((a, b) => {
      if (a.title < b.title) {
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
    dataCopy.sort((a, b) => {
      if (a.title > b.title) {
        return - 1
      } else {
        return 1
      }
    })
    console.log(dataCopy);
    setMovies(dataCopy)
  }

  const searchFunc = () => {
    setMovies([...movies].filter((movie) => {
      if (movie.title.toLocaleLowerCase().includes(search.toLocaleLowerCase().trim())) {
        setSearch("")
        return movie
      } else if (movie.director.toLocaleLowerCase().includes(search.toLocaleLowerCase().trim())) {
        setSearch('')
        return movie
      } else {
        setSearch('')
      }
    }))
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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchFunc}>search</button>
          <select
            onChange={filterGenre}
          >
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Animation">Animation</option>
            <option value="Biography">Biography</option>
            <option value="Comedy">Comedy</option>
            <option value="Crime">Crime</option>
            <option value="Drama">Drama</option>
            <option value="Family">Family</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Film-Noir">Film-Noir</option>
            <option value="Horror">Horror</option>
            <option value="History">History</option>
            <option value="Music">Music</option>
            <option value="Musical">Musical</option>
            <option value="Mystery">Mystery</option>
            <option value="Romance">Romance</option>
            <option value="Sport">Sport</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Thriller">Thriller</option>
            <option value="War">War</option>
            <option value="Western">Western</option>
          </select>
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
