import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div>
            <Link to="/"><h1>Snippet Manager</h1></Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Log In</Link>
        </div>
    )
}
