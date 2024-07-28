import React from 'react'
import '../../components/modules/ShowTask.modules.css'
import GetAllTasks from '../../services/api';

function ShowTask(){
    return(
        <div className='containerContent'>
            <div className="sideBarArea"></div>
            <section className='tasksArea'>
                <div className="content"><GetAllTasks /></div>
            </section>
        </div>
    )
}
export default ShowTask;