import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function Topics() {
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li align="left"><Link to="/topics/rendering">Rendering with React</Link></li>
                <li align="left"><Link to="/topics/components">Components</Link></li>
                <li align="left"><Link to="/topics/props-v-state">Props v. State</Link></li>
            </ul>

            <hr />
            <Outlet />
        </div>
    )
}