import React, { useState } from "react";
import Axios from "axios";

const api = Axios.create({
    baseURL: 'http://localhost:5001/'
});

function getAllTasks(){
    const [tasks,setTasks] = useState([]);

    try{
    api.get("/task")
    .then((response) => {
        const data = response.data;
        setTasks(data);
    })
    }catch(err){
        return (
            <div>Api not connected</div>
        )
    }
    return(
        <ul>
            {tasks.map((item,index)=>
            <li key={index}>{item._id}</li>
            )}
        </ul>
    )
}

export default getAllTasks;