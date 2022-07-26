import React, { useRef } from 'react'
import './InputField.css';


interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleaddtodo: (e:React.FormEvent)=>void;
}

export const InputField:React.FC<Props> = ({todo,setTodo, handleaddtodo}) => {
    const inputRef = useRef<HTMLInputElement>(null)


  return (
    <form className="input" onSubmit={
        (e)=>{
            handleaddtodo(e);
            inputRef.current?.blur(); 
        }}>
        <input type="input" 
            ref={inputRef}
            placeholder="Enter a task" 
            className="input__box"
            value={todo}
            onChange={(e:any)=>setTodo(e.target.value)}
            />
        <button className="input_submit">GO!!</button>
    </form>
  )
}
