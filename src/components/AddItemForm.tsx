import React from "react";
const AddItemForm = () => {
  return (
    <form>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          Lista de tarefas PodCodar
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
      />
      <button type="button" className="btn btn__primary btn__lg">
        Add Task
      </button>
    </form>
  );
};
export default AddItemForm;
