import React from 'react';
import ToDo from '../Models';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';

interface Props {
  toDos: ToDo[];
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
  toDo: ToDo;
}

// The example for declare type "Props" in another way
// const SingleToDo = ({ toDos, setToDos, toDo }: Props) => {
//   return <div>SingleToDo</div>;
// };

const SingleToDo: React.FC<Props> = ({ toDos, setToDos, toDo }) => {
  //for Done Feature
  const handleDone = (id: number) => {
    setToDos(
      toDos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  //Delete Feature
  const handleDelete = (id: number) => {
    setToDos(toDos.filter((todo) => todo.id !== id));
  };

  return (
    <form className="todos__single">
      {toDo.isDone ? (
        <s className="todos__single--text">{toDo.todo}</s>
      ) : (
        <span className="todos__single--text">{toDo.todo}</span>
      )}
      <div>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(toDo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(toDo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleToDo;
