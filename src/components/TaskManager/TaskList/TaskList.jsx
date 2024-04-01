import React, { Component } from "react";
import { connect } from "react-redux";
import { Alert, Button, Input, FormGroup, Label } from "reactstrap";
import { loadTasksAction } from "../../../actions/taskActions.js";
import { Link } from "react-router-dom";

import TaskItem from "./TastItem/TaskItem.jsx";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assignee: "",
      status: "",
      startDate: "",
      endDate: "",
    };
  }

  componentDidMount() {
    this.loadTasks();
  }

  loadTasks = () => {
    const { assignee, status, startDate, endDate } = this.state;
    // Dispatch an action to load tasks with the applied filters
    const filters = { assignee, status, startDate, endDate };
    this.props.loadTasks(filters);
  };

  handleApplyFilters = () => {
    this.loadTasks();
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  sortByPriority = () => {
    // Sort tasks by priority
    this.props.tasks.sort((a, b) => {
      if (a.priority < b.priority) return -1;
      if (a.priority > b.priority) return 1;
      return 0;
    });
    // Force re-render to reflect the sorted order
    this.forceUpdate();
  };

  render() {
    const { tasks } = this.props;

    return (
      <>
        <div style={{ marginBottom: "20px" }}>
          <div style={{ marginBottom: "10px" }}>
            <FormGroup style={{ display: "inline-block", marginRight: "10px" }}>
              <Label for="assignee">Assignee:</Label>
              <Input
                type="text"
                name="assignee"
                id="assignee"
                value={this.state.assignee}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup style={{ display: "inline-block", marginRight: "10px" }}>
              <Label for="status">Status:</Label>
              <Input
                type="select"
                name="status"
                id="status"
                value={this.state.status}
                onChange={this.handleChange}
              >
                <option value="">All</option>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
                <option value="Deployed">Deployed</option>
                <option value="Deferred">Deferred</option>
              </Input>
            </FormGroup>
            <FormGroup style={{ display: "inline-block", marginRight: "10px" }}>
              <Label for="startDate">Start Date:</Label>
              <Input
                type="date"
                name="startDate"
                id="startDate"
                value={this.state.startDate}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup style={{ display: "inline-block", marginRight: "10px" }}>
              <Label for="endDate">End Date:</Label>
              <Input
                type="date"
                name="endDate"
                id="endDate"
                value={this.state.endDate}
                onChange={this.handleChange}
              />
            </FormGroup>
            <Button className="filter-button" onClick={this.handleApplyFilters}>
              Apply Filters
            </Button>

            <Link to={"/tasks/add"}>
              <Button className="create-task-button">Create Task</Button>
            </Link>
            <Button className="priority-button" onClick={this.sortByPriority}>
              Sort by Priority
            </Button>
          </div>
        </div>

        {tasks.length === 0 && <Alert>No Tasks to show.</Alert>}
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadTasks: (filters) => dispatch(loadTasksAction(filters)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
