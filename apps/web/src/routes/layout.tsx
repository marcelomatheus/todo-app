import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function Layout(){
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Todas as task</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}

export default Layout;