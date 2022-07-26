import React, { useEffect, useRef, useState } from 'react'
import { Todo_Model } from '../InProjects/TODO/todo_model';
import {AiFillEdit, AiFillDelete} from "react-icons/ai";
import {MdDone} from 'react-icons/md';
import './ListItem.css';


interface Props {
    item: Todo_Model;
    itemList:Todo_Model[];
    setTodos:React.Dispatch<React.SetStateAction<Todo_Model[]>>;
}


export const ListItem = ({item,itemList,setTodos}:Props) => {

const [edit,setEdit] = useState<Boolean>(false);
const [editTodo,setEditTodo] = useState<string>(item.todo);

const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleEdit = (e: React.FormEvent, id: number) => {
     e.preventDefault();
    setTodos(
      itemList.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );

    console.log(editTodo);
    setEdit(false);
  };


const handleToDoDone = (id:number) => {
    setTodos(
        itemList.map((item)=> 
        item.id === id? {...item, isDone: !item.isDone } : item
    ))
}

const handleToDoDelete = (id:number) => {
    setTodos(
        itemList.filter((todo)=>todo.id !== id)
    )
}


  return (
    <div>
        <form className='todos__single'>

        {edit ? (
            <input
              value={editTodo}
              onBlur={(e)=>handleEdit(e,item.id)}
              onChange={(e) => setEditTodo(e.target.value)}
              className="todos__single--text"
              ref={inputRef}
            />
          ) : item.isDone ? (
            <s className="todos__single--text">{item.todo}</s>
          ) : (
            <span className="todos__single--text">{item.todo}</span>
          )}

            
            <div>
                <span className="icon"  onClick={(e) => {
                            if (!item.isDone) {

                                if(edit) {
                                    handleEdit(e,item.id);
                                }
                                setEdit(!edit);
                            }
                        }}>
                    <AiFillEdit/>
                </span>
                <span className="icon" onClick={()=>handleToDoDelete(item.id)}>
                    <AiFillDelete/>
                </span>
                <span className="icon" onClick={()=>handleToDoDone(item.id)}>
                    <MdDone/>
                </span>
            </div>
        </form>
    </div>
  )
};

