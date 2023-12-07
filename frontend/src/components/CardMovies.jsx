import { useNavigate } from "react-router-dom";


export default function CardMovies({ movie }) {
  const imageEndpoint = "https://image.tmdb.org/t/p/w500/"
  const id = movie.id

  const navigate = useNavigate();

  function handleNavigateToDetails() {
    navigate(`${"/detalhes/"}${id}`);

  }

  return (
      <div className="card_movies" onClick={handleNavigateToDetails}>
        <img src={`${imageEndpoint + movie.poster_path}`} alt="" />
        <span>{ movie.original_title }</span>
    </div>
  )
}
