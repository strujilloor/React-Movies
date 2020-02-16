import React, { Component } from 'react'
import axios from 'axios'

class MovieForm extends Component {

    state = {
        title: "Thor",
        year: 2019,
        description: "Un súperheroe",
        image: "https://images-na.ssl-images-amazon.com/images/I/91P1wWqX63L._SL1500_.jpg",
        theme: "acción",
        director: "Unknown"
    }

    handleChange = (event) => {
        event.preventDefault();
        const id = event.target.id;
        const value = event.target.value;
        if ( id === 'image' ) {
            this.setState({
                [ id ] : value
            });
        } else {
            this.setState({
                [ id ] : value
            });
        }
    }

    submit = (event) => {
        event.preventDefault();
        const movie = {...this.state};
        console.log(movie);
        axios.post('https://crud-movies.herokuapp.com/api/v1/createMovie', movie)
            .then(res => {
                console.log('Saved');
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="title" >
                                    Title
                                </label>
                                <input value={ this.state.title } onChange={ this.handleChange } className="form-control" type="text" id="title" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="year" >
                                    Year
                                </label>
                                <input value={ this.state.year } onChange={ this.handleChange } className="form-control" type="text" id="year" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description" >
                                    Description
                                </label>
                                <textarea value={ this.state.description } onChange={ this.handleChange } className="form-control" id="description" ></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="image" >
                                    URL Cover Page
                                </label>
                                <input value={ this.state.image } onChange={ this.handleChange } className="form-control" type="text" id="image" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="theme" >
                                    Theme
                                </label>
                                <input value={ this.state.theme } onChange={ this.handleChange } className="form-control" type="text" id="theme" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="director" >
                                    Director
                                </label>
                                <input value={ this.state.director } onChange={ this.handleChange } className="form-control" type="text" id="director" />
                            </div>
    
                            <button onClick={ this.submit } className="btn btn-primary">
                                Add Movie
                            </button>
    
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieForm
