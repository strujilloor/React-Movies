import React from 'react'

export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container">
                    <a href="/" className="navbar-brand">
                        Netflis
                    </a>
                    <form className="form-inline">
                        <button className="btn btn-outline-success" type="button">ADD MOVIE</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}
