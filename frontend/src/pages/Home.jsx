import { useEffect, useState } from "react";
import CardMovies from "../components/CardMovies";

export default function Home() {
  const endPoint = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

  const [moviesResult, setMoviesResult] = useState([]);

  const options = {
    method: 'GET', headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZjUyMjNmMTkzNDBkM2VmMDA5MGE2YWE0YWEwMmU3MCIsInN1YiI6IjY1NjkyOTdiY2Y0OGExMDBlNDY0YzdkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FDYYKMC4-XZmjDoaBGBePLTjtFK1vnpclehxyPHh6sg",
      accept: 'application/json'
    }
  };

  useEffect(() => {
    fetch(endPoint, options
    ).then((response) =>
      response.json()
    ).then((data) => setMoviesResult(data.results))
  }, []);

  return (

    <>
      <div className="card_list">
      {
        moviesResult.map((movie) => (
          <CardMovies key={movie.id} movie={movie} />
        ))
      }
      </div>

    </>
  )
}
