import React from 'react';
import './style.css';
import ToDo from '../Models';
import SingleToDo from './SingleToDo';
interface Props {
  toDos: ToDo[]; //array of ToDo
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const ToDoList: React.FC<Props> = ({ toDos, setToDos }) => {
  return (
    <div className="todos">
      {toDos.map((t) => (
        <SingleToDo toDo={t} key={t.id} toDos={toDos} setToDos={setToDos} />
      ))}
    </div>
  );
};

export default ToDoList;
