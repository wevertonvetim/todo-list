import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import AddItemForm from './components/AddItemForm';
import TaskDashboard from './components/TaskDashboard';
import { Item } from './interfaces/Item';

function App() {
  const [list, setList] = useState<Item[]>([]);

  const handleAddTask = (taskName: string) => {
    const newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
    });
    setList(newList);
  };

  return (
    <div className="todoapp stack-large">
      <Title />
      <AddItemForm handleAddTask={handleAddTask} />
      <TaskDashboard list={list} />
    </div>
  );
}

export default App;
