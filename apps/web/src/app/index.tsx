import React from "react";
import "./styles.css";
import ShowTask from "../routes/pages/ShowTask";
import SideBar from "../components/menus/SideBar"
import CreateTask from "../routes/pages/CreateTask"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(): JSX.Element {
  return (
  <div className="container">
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<SideBar />}>          
            <Route index element={<ShowTask />}/>
            <Route path="create-task" element={<CreateTask />}/>        
         </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
