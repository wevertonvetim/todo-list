import React from "react";

const TaskDashboard = () => {
  return (
    <>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn">
          <span className="visually-hidden">Show </span>
          <button>All</button>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn">
          <span className="visually-hidden">Show </span>
          <button>Active</button>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn">
          <span className="visually-hidden">Show </span>
          <button>Complete</button>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>
      <h2 id="list-heading">Tasks remaining</h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-0" type="checkbox" />
            <label className="todo-label" htmlFor="todo-0">
              Model Task
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              save
              <span className="visually-hidden"></span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden"></span>
            </button>
          </div>
        </li>
      </ul>
    </>
  );
};
export default TaskDashboard;
