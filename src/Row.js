import React,{useState,useEffect} from 'react'
import axios from './axios'
import requests from './request';


export const Row = ({title,fetchUrl}) => {
    const [movies, setMovie] = useState([]);
    const  baseURL = "https://api.themoviedb.org/3"
    console.log(requests.fetchNetflixOriginals)
    useEffect(() => {
        
     async function fetchData() {
         const request = await axios.get(fetchUrl);
         setMovie(request.data.results);
         console.log(request.data.results);
         
     }
     fetchData();
      
    }, [fetchUrl])

    return (
       
        <div className="row">
            <h2>{title}</h2>
          {movies.map(movie => (
               <img src={`${baseURL}${movie.poster_path}`} alt={movie.name}/>
          ))}
        </div>
    )
}
