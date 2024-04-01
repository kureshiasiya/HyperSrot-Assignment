import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/shared/Header/Header.jsx";
import Footer from "./components/shared/Footer/Footer.jsx";
import TaskManager from "./components/TaskManager/TaskManager.jsx";
import TaskDetail from "./components/TaskManager/TaskDetail/TaskDetail.jsx";
import PageNotFound from "./components/shared/PageNotFound/PageNotFound.jsx";
import TaskList from "./components/TaskManager/TaskList/TaskList.jsx";
import Taskform from "./components/TaskManager/Taskform/Taskform.jsx";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="column">
          <Header />
        </div>
      </div>

      <div className="row">
        <div className="column">
          <Routes>
            <Route path="/" element={<Navigate to="/tasks" />} />
            <Route path="/tasks" element={<TaskList />} />
            <Route path="/tasks/add" element={<Taskform />} />
            <Route path="/tasks/:id" element={<TaskDetail />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
