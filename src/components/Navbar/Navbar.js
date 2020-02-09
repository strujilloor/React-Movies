import React from 'react'

export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container">
                    <a href="/" className="navbar-brand">
                        Netflis
                    </a>
                    <form class="form-inline">
                        <button class="btn btn-outline-success" type="button">AGREGAR PELÍCULA</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}
