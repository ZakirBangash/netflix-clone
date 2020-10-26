import React,{useState,useEffect} from 'react'
import axios from './axios'
import requests from './request';



const baseURL = 'https://api.themoviedb.org/3';
const apiKey = '72e531949e0995e3b76bc00c6689bdc7'
export const Row = ({title,fetchUrl}) => {
    const [movies, setMovie] = useState([]);
    
    
   
   
    useEffect(() => {

     async function fetchData() {
         const request = await axios.get(fetchUrl);
         setMovie(request.data.results);
        
         
     }
     fetchData();
      
    }, [fetchUrl])

    return (
       
        <div className="row">
            <h2>{title}</h2>
          {movies.map(movie => (

        
            <img src={`https://api.themoviedb.org/3 ${movie.poster_path}`}  />
          ))}
        </div>
    )
}
