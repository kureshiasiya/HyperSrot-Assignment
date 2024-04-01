import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { deleteTaskAction } from "../../../../actions/taskActions";

const TaskItem = (props) => {
  const { task } = props;

  const handleDelete = () => {
    props.deleteTask(task.id);
  };

  return (
    <Card className="card-custom card-gap">
      <Button className="close-btn" close onClick={handleDelete}></Button>

      <CardBody className="card-content">
        <CardText>
          <strong></strong> {task.status}
        </CardText>
        <div className="divider"></div>
        <div className="title-priority-container">
          <CardTitle tag="h5">
            <span>{task.title}</span>
          </CardTitle>
          <CardText>
            <strong>Priority:</strong> {task.priority}
          </CardText>
        </div>
        <CardText>
          <strong>Description:</strong> {task.description}
        </CardText>
        <CardText>
          <div className="info-box">
            <strong>Start Date:</strong> {task.startDate}
          </div>
        </CardText>
        <CardText>
          <div className="info-box">
            <strong>End Date:</strong> {task.endDate}
          </div>
        </CardText>
        <CardText>
          <div className="info-box">
            <strong>Assignee:</strong> {task.assignee}
          </div>
        </CardText>
      </CardBody>
    </Card>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTask: (id) => {
      dispatch(deleteTaskAction(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(TaskItem);
