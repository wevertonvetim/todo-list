import React from 'react';
import { Item } from '../interfaces/Item';
import Task from './Task';

interface Props {
  list: Item[];
}

function TaskDashboard({ list }: Props) {
  return (
    <>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn">
          <span className="visually-hidden">Show </span>
          <button type="button">All</button>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn">
          <span className="visually-hidden">Show </span>
          <button type="button">Active</button>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn">
          <span className="visually-hidden">Show </span>
          <button type="button">Complete</button>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>
      <h2 id="list-heading">Tasks remaining</h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {list.map((item) => (
          <Task item={item} key={item.id} />
        ))}
      </ul>
    </>
  );
}
export default TaskDashboard;
