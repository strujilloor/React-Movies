import React from 'react'
import MovieCard from '../../components/MovieCard/MovieCard';

const MoviesContainer = () => {
    return (
        <div>
            <div className="container mt-4">
                <h3>Movies Container</h3>
                <div className="row">
                    <MovieCard />
                </div>
            </div>
        </div>
    )
}

export default MoviesContainer
