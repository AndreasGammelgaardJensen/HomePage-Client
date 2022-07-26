import React from 'react';
import { Todo_Model } from '../InProjects/TODO/todo_model';
import { ListItem } from './ListItem';
import './ListItem.css';

interface Props {
    itemList:Todo_Model[];
    setTodos:React.Dispatch<React.SetStateAction<Todo_Model[]>>;
}

export const List:React.FC<Props> = ({itemList,setTodos}:Props) => {
  return (
    <div className="todos">
        {itemList.map(item=> (<ListItem item={item} key={item.id} itemList={itemList} setTodos={setTodos}/>))}
    </div>
  )
}
