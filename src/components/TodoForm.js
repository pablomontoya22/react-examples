import React, { Component } from 'react';

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      responsible: '',
      description: '',
      priority: 'low'
    };
    this.handlerInput = this.handlerInput.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
  }

  handlerInput(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  }

  handlerSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
  }

  render() {
    return (
      <div className="card">
        <form className="card-body" onSubmit={this.handlerSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="title"
              onChange={this.handlerInput}
              className="form-control"
              placeholder="Title"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="responsible"
              onChange={this.handlerInput}
              className="form-control"
              placeholder="Responsible"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="description"
              onChange={this.handlerInput}
              className="form-control"
              placeholder="Description"
            />
          </div>
          <div className="form-group">
            <select
              name="priority"
              className="form-control"
              onChange={this.handlerInput}>
              <option>Choose one</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
