import React, { useState } from "react";
import { InputField } from "../../Components/InputField";
import { List } from "../../Components/List";
import './ToDoApp.css';
import { Todo_Model } from "./todo_model";

const ToDoApp:React.FC = () => {

    const [todo, setTodo] = useState<string>(""); 

    const [todos,setTodos] = useState<Todo_Model[]>([]);

    const handleAddTodo=(e:React.FormEvent)=>{
        e.preventDefault();

        if(todo) {
            setTodos([...todos, {id: Date.now(), todo,isDone:false}]);
            setTodo("");
        }

        console.log(todos);
    };
    return (
        <div className="App">
            <span className="heading">Taskify</span>
            <InputField todo={todo} setTodo={setTodo} handleaddtodo={handleAddTodo}/>
            <List itemList={todos} setTodos={setTodos}/>
        </div>
    )
}

export default ToDoApp;