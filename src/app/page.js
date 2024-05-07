'use client';
import React, { useState } from "react";

export default function Home() {
  const [item, setItem] = useState('')
  const [todoList, setTodoList] = useState([])

  const handleChange = (event) => {
    const value = event.target.value;
    setItem(value)
  }

  const addItem = () => {
    setTodoList([...todoList, item])
  }

  return (
    <div>
      <input placeholder="Add" onChange={handleChange} value={item}></input>
      <button onClick={addItem}>Add Todo</button>
      <div>
        <h3>Todo List</h3>
        {
          todoList.map((todoItem, i) => {
            return(
            <p key={i}>{todoItem}</p>
            )
          })
        }
      </div>
    </div>
  );
}
