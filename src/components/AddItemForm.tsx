import React, { useState } from 'react';

interface Props {
  handleAddTask: (task: string) => void;
}

function AddItemForm({ handleAddTask }: Props) {
  const [inputValue, setInputValue] = useState<string>('');

  const addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue !== '') {
      handleAddTask(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={addTask}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          Task list PodCodar
        </label>
      </h2>
      <input
        type="text"
        value={inputValue}
        id="new-todo-input"
        className="input input__lg"
        name="new-todo-input"
        autoComplete="off"
        placeholder="Digite a sua tarefa"
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add Task
      </button>
    </form>
  );
}
export default AddItemForm;
