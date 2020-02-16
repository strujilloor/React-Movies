import React from 'react'
import axios from 'axios'

const MovieCard = (props) => {

    const container = {
        width: '100%',
        height: '21.25rem',
        overflow: 'hidden',
        // margin: '10px',
        position: 'relative'
    }
    const crop = {
        position: 'absolute',
        left: '-100%',
        right: '-100%',
        top: '-100%',
        bottom: '-100%',
        margin: 'auto',
        minHeight: '100%',
        minWidth: '100%'
    }

    const handleDelete = (event) => {
        event.preventDefault();

        axios.delete(`https://crud-movies.herokuapp.com/api/v1/deleteMovieById?id=${props.id}`)
            .then(res => {
                console.log(props.id + ' deleted');
                // window.location.assign('/');
                props.update();
            })
            .catch( error => {
                console.log(error);
            })
    }

    return (
        <div className="col mb-4">
            <div className="card h-100">
                <div style={container}>
                    <img style={crop} src={ props.image } alt="" className="card-img-top"/>

                </div>
                <div className="card-body">
                    <h5 className="card-title">
                        { props.title }
                    </h5>
                    <p className="card-text" >
                        <small>
                            { props.description.substr(0,85) + '...' }
                        </small>
                    </p>
                    <p><b>Director:</b> { props.director }</p>
                    <p><b>Tema:</b> { props.theme }</p>
                </div>
                <div className="card-footer">
                    <button onClick={ handleDelete } className="btn btn-primary">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MovieCard

