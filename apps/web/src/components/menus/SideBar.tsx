import React from "react";
import {Link, Outlet} from "react-router-dom"

function SideBar(){
    
    return(
    <>
        <nav>
            <ul>
                <li><img src="../../assets/images/ToDo_logo.png"></img></li>
                <li><Link to="/">Lista de tarefas</Link></li>
                <li><Link to="/create-task">Criar tarefa</Link></li>
            </ul>
        </nav>
        <Outlet />
    </>
    )
}

export default SideBar;