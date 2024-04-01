import React, { useState, useEffect } from "react";
import { Alert, CardBody, CardHeader } from "reactstrap";
import { useParams } from "react-router-dom";
import { getSingleTask } from "../../../services/TaskService";
import { Link } from "react-router-dom";

const TaskDetail = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        console.log("Fetching task...");
        const taskData = await getSingleTask(id);
        console.log("Task data:", taskData);
        setTask(taskData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching task:", error);
        setLoading(false);
      }
    };

    fetchTask();
  }, [id]);

  console.log("Loading:", loading);

  if (loading) {
    return <Alert>Loading...</Alert>;
  }

  if (!task) {
    return <Alert color="danger">Task not found.</Alert>;
  }

  return (
    <>
      <CardHeader>
        <h3>{task.title}</h3>
      </CardHeader>
      <CardBody>
        <p>{task.description}</p>
        <p>
          <Link to="/tasks">Back toTasks</Link>
        </p>
      </CardBody>
    </>
  );
};

export default TaskDetail;
