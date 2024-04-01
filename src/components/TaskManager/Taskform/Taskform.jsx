import React, { Component } from "react";
import { connect } from "react-redux";
import { FormGroup, Input, Label, Button, Row, Col } from "reactstrap"; // Import Row and Col from reactstrap
import { Navigate } from "react-router-dom";
import { addTaskAction } from "../../../actions/taskActions";

class Taskform extends Component {
  state = {
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    assignee: "",
    status: "",
    priority: "",
    titleErr: "",
    descriptionErr: "",
    redirect: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      title,
      description,
      startDate,
      endDate,
      assignee,
      status,
      priority,
    } = this.state;

    let valid = true;
    if (title === "") {
      this.setState({ titleErr: "Title cannot be blank." });
      valid = false;
    }
    if (description === "") {
      this.setState({ descriptionErr: "Description cannot be blank." });
      valid = false;
    }
    if (valid) {
      const data = {
        title,
        description,
        startDate,
        endDate,
        assignee,
        status,
        priority,
      };
      this.props.addTask(data);

      this.setState({
        title: "",
        description: "",
        startDate: "",
        endDate: "",
        assignee: "",
        status: "",
        priority: "",
        titleErr: "",
        descriptionErr: "",
        redirect: true,
      });
    } else {
      // Set a timeout to clear the error messages after 5 seconds
      setTimeout(() => {
        this.setState({
          titleErr: "",
          descriptionErr: "",
        });
      }, 3000); // 5000 milliseconds = 5 seconds
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
      [e.target.id + "Err"]: "",
    });
  };

  render() {
    const {
      title,
      description,
      titleErr,
      descriptionErr,
      startDate,
      endDate,
      assignee,
      status,
      priority,
      redirect,
    } = this.state;

    return (
      <>
        {redirect && <Navigate to="/tasks" />}
        <form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={this.handleChange}
              style={{ borderColor: titleErr ? "red" : "" }}
            />
            {titleErr && <span style={{ color: "red" }}>{titleErr}</span>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="description">Description</Label>
            <Input
              type="textarea"
              id="description"
              value={description}
              onChange={this.handleChange}
              rows="2"
              style={{ borderColor: descriptionErr ? "red" : "" }}
            />
            {descriptionErr && (
              <span style={{ color: "red" }}>{descriptionErr}</span>
            )}
          </FormGroup>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="startDate">Start Date</Label>
                <Input
                  id="startDate"
                  value={startDate}
                  onChange={this.handleChange}
                  type="date"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="endDate">End Date</Label>
                <Input
                  id="endDate"
                  value={endDate}
                  onChange={this.handleChange}
                  type="date"
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="assignee">Assignee</Label>
                <Input
                  id="assignee"
                  value={assignee}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="status">Status</Label>
                <Input
                  type="select"
                  id="status"
                  value={status}
                  onChange={this.handleChange}
                >
                  <option value="">Select Status</option>
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                  <option value="Deployed">Deployed</option>
                  <option value="Deferred">Deferred</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="priority">Priority</Label>
                <div className="d-flex align-items-center">
                  <Input
                    type="select"
                    id="priority"
                    value={priority}
                    onChange={this.handleChange}
                  >
                    <option value="">Select Priority</option>
                    <option value="P0">P0</option>
                    <option value="P1">P1</option>
                    <option value="P2">P2</option>
                  </Input>
                  <Button className="add-button">Add </Button>
                </div>
              </FormGroup>
            </Col>
          </Row>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (data) => {
      dispatch(addTaskAction(data));
    },
  };
};

export default connect(null, mapDispatchToProps)(Taskform);
