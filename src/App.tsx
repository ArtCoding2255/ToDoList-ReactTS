import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import ToDo from './Models';
import ToDoList from './components/ToDoList';
const App: React.FC = () => {
  const [toDo, setToDo] = useState<string>('');
  const [toDos, setToDos] = useState<ToDo[]>([]);

  const handleApp = (e: React.FormEvent) => {
    if (toDo) {
      setToDos([...toDos, { id: Date.now(), todo: toDo, isDone: false }]); //combine exiting toDo and new to do by using spread operator
      setToDo(''); //clear the input field
    }

    e.preventDefault();
  };

  console.log('All todos', toDos);
  console.log('The last todo:', toDo);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField toDo={toDo} setToDo={setToDo} handleAdd={handleApp} />
      <ToDoList setToDos={setToDos} toDos={toDos} />
    </div>
  );
};

export default App;
