"use client";
import React, { useState } from "react";

export default function Home() {
  const [item, setItem] = useState({
    item: '',
    id: null,
    done: false
  });
  const [todoList, setTodoList] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setItem({
      item: value,
      id: todoList.length == 0 ? 0 : todoList.length + 1
    })
  };

  const addItem = () => {
    setTodoList([...todoList, item]);
  };

  const deleteItem = (id) => {
    console.log(id);
    setTodoList(l => l.filter(item => item.id !== id));
  } 

  const doneItem = (id) => {
    setTodoList(todoList.map(item =>
      item.id === id ? { ...item, done: !item.done } : item
    ));
  }

  return (
    <div className="main">
      <input placeholder="Add" onChange={handleChange} value={item.item}></input>
      <button className="todoButton" onClick={addItem}>Add Todo</button>
      <div>
        <h3>TODO LIST</h3>
        {todoList.map((todoItem, i) => {
          return (
            <div className="item" key={i}>
              <p className="flex-item-left">{todoItem.done ? <s>{todoItem.item}</s> : todoItem.item}</p>
              <button className="doneButton" onClick={() => doneItem(todoItem.id)}>Done</button>
              <button className="deleteButton" onClick={() => deleteItem(todoItem.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
