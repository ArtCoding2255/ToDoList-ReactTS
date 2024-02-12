import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import ToDo from './Models';
const App: React.FC = () => {
  const [toDo, setToDo] = useState<string>('');
  const [toDos, setToDos] = useState<ToDo[]>([]);
  const handleApp = (e: React.FormEvent) => {
    if (toDo) {
      setToDos([...toDos, { id: Date.now(), todo: toDo, isDone: false }]);
    }

    e.preventDefault();
  };

  console.log(...toDos);
  console.log(toDo);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField toDo={toDo} setToDo={setToDo} handleAdd={handleApp} />
    </div>
  );
};

export default App;
