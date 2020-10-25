import React from 'react'
import { Link } from 'react-router-dom'
import './navigation.css'

function Navigation() {
    return (
        <div>
            <div className="nav-container">
                <div className="brandName">
                    <Link to="/" className="page">
                        Virtual Tour
                    </Link>
                </div>
                <ul className="pages">
                    <Link to="/main" className="page">
                        <li>Towns</li>
                    </Link>
                    <Link to="/directory" className="page">
                        <li className="specialColor">Directories</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Navigation
