import React from 'react'

const MovieForm = () => {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="title" >
                                Title
                            </label>
                            <input className="form-control" type="text" id="title" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="year" >
                                Year
                            </label>
                            <input className="form-control" type="text" id="year" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description" >
                                Description
                            </label>
                            <textarea className="form-control" id="description" ></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="coverPage" >
                                URL Cover Page
                            </label>
                            <input className="form-control" type="text" id="coverPage" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="theme" >
                                Theme
                            </label>
                            <input className="form-control" type="text" id="theme" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="director" >
                                Director
                            </label>
                            <input className="form-control" type="text" id="director" />
                        </div>

                        <button className="btn btn-primary">Add Movie</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default MovieForm
