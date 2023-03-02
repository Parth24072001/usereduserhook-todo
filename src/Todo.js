import React from 'react';
import { ACTIONS } from "./App.js";
// import delete from "./delete.svg";

function Todo({ todo, dispatch }) {
    return (
        <>
            <div className='itemslist'>
                <div className='todo_items'>
                    <span style={{ "text-decoration": todo.complete ? "line-through" : "#000" }} >{todo.text}</span>
                </div>
                <div className='btngroup'>
                    <input className='checkbox' onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })} type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                    <button className='btn' onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}>delete</button>
                </div>
            </div>
        </>
    )
}

export default Todo;
