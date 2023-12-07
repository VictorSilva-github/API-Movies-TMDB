import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

export default function Detalhes() {
  let { id } = useParams();

  const endPoint = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const [movieResult, setMovieResult] = useState([]);

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
    ).then((data) => setMovieResult(data))
  }, []);

 return (
    <div>
        <img src={`https://image.tmdb.org/t/p/w500/${movieResult.poster_path}`} alt="" />
        <h1>{movieResult.original_title}</h1>
        <p>{movieResult.overview}</p>
        <p>Duracao: {movieResult.runtime} min</p>

        {
            movieResult.adult ? (<p>NÃO RECOMENDADO PARA CRIANÇAS</p>) : (<p>LIVRE PARA TODAS AS IDADES</p>)
        }
    </div>
    )
}
