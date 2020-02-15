import React from 'react'

const MovieCard = (props) => {

    const container = {
        width: '100%',
        height: '340px',
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
                    <a href="" className="btn btn-primary">
                        Delete
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MovieCard

