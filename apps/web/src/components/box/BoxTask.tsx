import React from "react";
import "../modules/BoxTask.modules.css"


function BoxTask(props:any){
    interface item{
        name:string,
        _id:string
    }
    return(
        <ul>
            {props.tasks.map((item:item)=>
            <li key={item._id}><div className="boxTask"><p className="nameTask">{item.name}</p><button className="editButton">Edit</button><button className="checkButton">Check</button><button onClick={()=>props.handleClickId(item._id)} className="deleteButton">Delete</button></div></li>
            )}
        </ul>
    )
}

export default BoxTask;