import './App.css';
import React, { useReducer, useState } from 'react';
import Todo from './Todo.js';

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo"

}

export default function App() {

  const [text, settext] = useState("");
  const [todos, dispatch] = useReducer(reducer, []);


  function HandleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { text: text } })
    settext("")

  }


  function reducer(todos, action) {
    switch (action.type) {
      case ACTIONS.ADD_TODO:
        return [...todos, newTodo(action.payload.text)]
      case ACTIONS.TOGGLE_TODO:
        return todos.map(todo => {
          if (todo.id === action.payload.id) {
            return { ...todo, complete: !todo.complete }
          }
          return todo
        })


      case ACTIONS.DELETE_TODO:
        return todos.filter(todo => todo.id !== action.payload.id)

      default:
        return todos
    }

    function newTodo(text) {
      return { id: Date.now(), text: text, complete: false }
    }
  };

  return (
    <>
      <div className='form'>

        <form className='add_items' onSubmit={HandleSubmit}>
          <input className='inputfield' placeholder='Your Todo' type="text" value={text} onChange={e => settext(e.target.value)}></input>
          <button className='btn btn_add' disabled={!text} onClick={HandleSubmit}>ADD</button>
        </form>
        <div className='items'>
          {todos.length === 0 ? <div className='headingblock'><h1 className='heading'>No Task</h1></div> : todos.map(todo => {
            return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
          })}
        </div>
      </div>
    </>
  );
}

