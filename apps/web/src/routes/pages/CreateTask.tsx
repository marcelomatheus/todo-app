import React, { useState } from 'react'
import '../../components/modules/CreateTask.modules.css'
import Select from "react-select"

function SelectCategory(){
    const [selectedOption,setSelectedOption] = useState(null);
    return(
        <Select />
    )
}

function CreateTask(){
    return(
        <div className='containerContent'>
            <div className="sideBarArea"></div>
            <section className='tasksArea'>
            <div className="content">
                <div className="createAre">
                    <form>
                        <div>
                        <label>Nome da tarefa:</label>
                        <input type='text'></input>
                        </div>
                        <div>
                        <label>Categoria:</label>
                        <SelectCategory />
                        </div>
                    </form>
                </div>
            </div>
            </section>
        </div>
    )
}
export default CreateTask;