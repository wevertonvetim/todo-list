import React from 'react';
import { Item } from '../interfaces/Item';

interface Props {
  item: Item;
}

function Task({ item }: Props) {
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input id="todo-0" type="checkbox" />
        <label className="todo-label label__lg" htmlFor="todo-0">
          {item.name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          save
          <span className="visually-hidden" />
        </button>
        <button type="button" className="btn btn__danger">
          Delete
          <span className="visually-hidden" />
        </button>
      </div>
    </li>
  );
}

export default Task;
