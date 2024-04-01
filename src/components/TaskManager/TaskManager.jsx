import React from "react";
import { Row, column } from "reactstrap";
import Taskform from "./Taskform/Taskform.jsx";
import TaskList from "./TaskList/TaskList.jsx";
const TaskManager = (props) => {
  return (
    <Row>
      <column>
        <Taskform addTask />
      </column>
      <column>
        <TaskList tasks />
      </column>
    </Row>
  );
};

export default TaskManager;
