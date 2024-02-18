import React from 'react';
import './style.css';
import ToDo from '../Models';
interface Props {
  toDos: ToDo[]; //array of ToDo
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const ToDoList: React.FC<Props> = ({ toDos, setToDos }) => {
  return <div className="todos">ToDoList</div>;
};

export default ToDoList;
