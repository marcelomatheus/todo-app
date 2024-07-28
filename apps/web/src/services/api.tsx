import React, { useEffect, useState } from "react";
import Axios from "axios";
import BoxTask from "../components/box/BoxTask"

const api = Axios.create({
    baseURL: 'http://localhost:5001/'
});

interface TaskProp{
    _id: string;
    name: string;
}

function getAllTasks(){
    const [tasks,setTasks] = useState([{}]);
    const [id, setId] = useState({});
    try{
    useEffect(()=>{
    api.get("/task")
    .then((response) => {
        const data = response.data;
        setTasks(data);
    });
    },[])
    }catch(err){
        return (
            <div>Api not connected</div>
        )
    }

    async function handleClickId(_id:string){
        setId(_id);
        await api
        .delete(`/task/${id}`)
        .then((response)=>console.log(response));
    }

    return(
        <BoxTask onClick={handleClickId} tasks={tasks}/>
    )
}

export default getAllTasks;