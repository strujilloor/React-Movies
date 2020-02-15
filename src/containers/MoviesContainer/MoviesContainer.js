import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MovieCard from '../../components/MovieCard/MovieCard'

const MoviesContainer = () => {

    const [ movies, setMovies ] = useState([])

    useEffect( () => {
        axios.get('https://crud-movies.herokuapp.com/api/v1/getMovies')
            .then( data => {
                // console.log(data);
                setMovies(data.data)
            })
            .catch( error => {
                console.log(error)
                setMovies([])
            })
    })

    return (
        <div>
            <div className="container mt-4">
                <h3>Movies Container</h3>
                <div className="row row-cols-4">
                    {movies.map( ( movie ) => (
                        <MovieCard key={ movie._id }
                            image={ movie.image }
                            title={ movie.title }
                            description={ movie.description }
                            director={ movie.director }
                            theme={ movie.theme }
                            year={ movie.year }
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MoviesContainer
