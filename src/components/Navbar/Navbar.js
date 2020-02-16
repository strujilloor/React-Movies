import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        Netflis
                    </Link>
                    <form className="form-inline">
                        <Link to='/addMovie' className="btn btn-outline-success" type="button">ADD MOVIE</Link>
                    </form>
                </div>
            </nav>
        </div>
    )
}
