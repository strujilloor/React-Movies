import React from 'react'

const MovieCard = (props) => {
    return (
        <div>
            <div className="card">
                <img src="" alt="" className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">
                        Card Title
                    </h5>
                    <p className="card-text">
                        Some text to show to user for the win.
                    </p>
                </div>
                <div className="card-footer">
                    <a href="" className="btn btn-primary">
                        Delete
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MovieCard

