import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import {Link} from "react-router-dom";

function TitleCards(props) {

  const [apiData, setApiData] = useState([])

  const cardsRef = useRef()

  


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDE1MDY5ZmM2ZWE3OWNlMTI4N2NlMjYyMWI3MDUzMyIsIm5iZiI6MTcyMDcwMDgzNC4yNTA1MTcsInN1YiI6IjY2OGZjNTMzNmZlZWYwYzJmMGQ1MzAyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j5Vx4VPidIxXSC871xxPRhHk4qZjIdskmvqrMfM9hWE'
    }
  };
  
  
  

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;

  }

  useEffect(() => {

    fetch(props.linkData, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel)
  }, [])

  return (
    <div className='titlecards'>
      <h2>{props.title}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards;
