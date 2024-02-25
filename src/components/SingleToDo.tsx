import React, { useEffect, useRef, useState } from 'react';
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
  const [edit, setEdit] = useState<boolean>(false);
  const [editToDo, setEditTodo] = useState<string>(toDo.todo);

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
  //Edit Feature
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setToDos(
      toDos.map((todo) => (todo.id === id ? { ...todo, todo: editToDo } : todo))
    );

    setEdit(false);
  };

  useEffect(() => {
    inputRef.current?.focus(); //if inputRef is not null then focus
  }, [edit]);
  const inputRef = useRef<HTMLInputElement>(null);

  console.log('Single editToDo', editToDo);
  return (
    <form className="todos__single" onSubmit={(e) => handleEdit(e, toDo.id)}>
      {edit ? (
        <input
          ref={inputRef}
          value={editToDo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todos__single--test"
        />
      ) : toDo.isDone ? (
        <s className="todos__single--text">{toDo.todo}</s>
      ) : (
        <span className="todos__single--text">{toDo.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            //chech for if these variable are falsy (เป็น false ไหม), then do the setEdit
            //have to be not done to edit
            if (!edit && !toDo.isDone) {
              setEdit(!edit);
            }
          }}
        >
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
