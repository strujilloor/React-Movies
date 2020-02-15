import React from 'react'
import MovieForm from '../../components/MovieForm/MovieForm'

const MovieFormContainer = () => {
    return (
        <div>
            <div className="row mb-4">
                <div className="col"></div>
                <div className="col-xl-6 col-lg-8 col-md-8 col-sm-10 col-10">
                    <MovieForm />
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}

export default MovieFormContainer
