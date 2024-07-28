import React from "react";
import {Link, Outlet} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'
import '../modules/SideBar.modules.css'

function SideBar(){
    
    return(
    <div className="container">
        <nav className="sideBar">
            <ul>
                <li><span className="imageLogo"></span></li>
                <li><Link className="link" to="/"><FontAwesomeIcon className="icon" icon={faList} /><span className="textIcon"><strong>TAREFAS</strong></span></Link></li>
                <li><Link className="link" to="/create-task"><FontAwesomeIcon className="icon" icon={faPlus} /><span className="textIcon"><strong>CRIAR TAREFA</strong></span></Link></li>
            </ul>
        </nav>
        <Outlet />
    </div>
    )
}

export default SideBar;